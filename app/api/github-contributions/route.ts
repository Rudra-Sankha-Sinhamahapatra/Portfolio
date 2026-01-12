import { fetchGitHubContributions } from "@/lib/githubContributions";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
try {
    let { from, to } = await req.json();
    
    from = new Date(from);
    to = new Date(to);

    const result = await fetchGitHubContributions('Rudra-Sankha-Sinhamahapatra', from, to);

    return new Response(JSON.stringify(result), {    
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    })
} catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}