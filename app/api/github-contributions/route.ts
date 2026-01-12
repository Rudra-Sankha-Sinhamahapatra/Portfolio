import { fetchGitHubContributions } from "@/lib/githubContributions";
import { checkRateLimit } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";

let cachedData: any = null;
let lastFetchTime = 0;

const CACHE_TTL = 10 * 60 * 1000; 

export async function POST(req: NextRequest) {
    try {

        const { rateLimited } = checkRateLimit(req);

        if (rateLimited) {
            return NextResponse.json(
                { error: 'Rate limit exceeded' }, 
                { status: 429 }
            )
        }

        const now = Date.now();

        if (cachedData && now - lastFetchTime < CACHE_TTL) {
            console.log("Returning cached GitHub contributions data");
            return NextResponse.json(cachedData, {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        let { from, to } = await req.json();

        from = new Date(from);
        to = new Date(to);

        const result = await fetchGitHubContributions('Rudra-Sankha-Sinhamahapatra', from, to);
        console.log("Fetched new GitHub contributions api data");

        cachedData = result;
        lastFetchTime = now;

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