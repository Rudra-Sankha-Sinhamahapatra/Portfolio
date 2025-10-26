import { ContributionData } from '@/components/ui/ContributionGraph'

interface GitHubContributionDay {
  contributionCount: number;
  date: string;
  contributionLevel: 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';
}

interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

interface GitHubContributionCalendar {
  totalContributions: number;
  weeks: GitHubContributionWeek[];
}

export async function fetchGitHubContributions(
  username: string
): Promise<ContributionData[]> {

  if (!username) {
    throw new Error('GitHub username is required')
  }

  if (!process.env.GITHUB_TOKEN) {
    throw new Error('GitHub token is not configured')
  }


  const endDate = new Date()
  const startDate = new Date()

  startDate.setFullYear(endDate.getFullYear() - 1)
  startDate.setMonth(endDate.getMonth())
  startDate.setDate(endDate.getDate())

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection(from: "${startDate.toISOString()}", to: "${endDate.toISOString()}") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
      body: JSON.stringify({ query })
    })

    if (response.status === 401) {
      throw new Error('Unauthorized: Invalid GitHub token')
    }

    if (response.status === 403) {
      throw new Error('Forbidden: Rate limit exceeded or token lacks permissions')
    }

    if (!response.ok) {
      const errorBody = await response.text()
      throw new Error(`GitHub API request failed: ${errorBody}`)
    }

    const data = await response.json() as {
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: GitHubContributionCalendar
          }
        }
      }
    }


    if (!data.data || !data.data.user) {
      throw new Error(`No contributions found for username: ${username}`)
    }


    const contributions: ContributionData[] = data.data.user
      .contributionsCollection.contributionCalendar.weeks
      .flatMap((week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: getLevelFromContributionLevel(day.contributionLevel)
        }))
      )

    return contributions
  } catch (error) {
    console.error('Detailed GitHub contributions fetch error:', error)
    throw error
  }
}

function getLevelFromContributionLevel(level: GitHubContributionDay['contributionLevel']): number {
  switch(level) {
    case 'NONE': return 0
    case 'FIRST_QUARTILE': return 1
    case 'SECOND_QUARTILE': return 2
    case 'THIRD_QUARTILE': return 3
    case 'FOURTH_QUARTILE': return 4
    default: return 0
  }
}
