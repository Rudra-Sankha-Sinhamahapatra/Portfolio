import { fetchGitHubContributions } from "@/lib/githubContributions";
import { checkRateLimit } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { rateLimited } = await checkRateLimit(req);

        if (rateLimited) {
            return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
        }
        let { from, to } = await req.json();

        from = new Date(from);
        to = new Date(to);

        const result = await fetchGitHubContributions('Rudra-Sankha-Sinhamahapatra', from, to);

        return NextResponse.json(result, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}