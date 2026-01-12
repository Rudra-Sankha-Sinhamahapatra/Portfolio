import { NextRequest } from "next/server";


type RecordRateLimit = {
    count: number;
    lastHit: number;
}

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 10;

const store = new Map<string, RecordRateLimit>();

export function checkRateLimit(req: NextRequest) {
    const ip =
        req.headers.get('x-forwarded-for')?.split(",")[0] ||
        req.headers.get('x-real-ip') ||
        'unknown';

    const now = Date.now();
    const record = store.get(ip);

    if (!record) {
        store.set(ip, { count: 1, lastHit: now });
        return { rateLimited: false };
    }

    if (now - record.lastHit > WINDOW_MS) {
        store.set(ip, { count: 1, lastHit: now });
        return { rateLimited: false };
    }

    if (record.count >= MAX_REQUESTS) {
        return { rateLimited: true };
    }

    record.count++;
    store.set(ip, record);
    return { rateLimited: false };
}

