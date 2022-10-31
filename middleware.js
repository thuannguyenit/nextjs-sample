import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'US';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
    matcher: '/secret-page',
};

export function middleware(req) {
    // Extract country. Default to US if not found.
    const country = (req.geo && req.geo.country) || 'US';

    console.log(request.url);
    console.log(request.referrer);
    console.log(request.headers.get('referer'));
    console.log(request.ip);
    console.log(request.signal);
    console.log(request.geo);
    console.log(request.destination);
    console.log(request.headers);

    // Specify the correct route based on the requests location
    if (country === BLOCKED_COUNTRY) {
        req.nextUrl.pathname = '/login';
    } else {
        req.nextUrl.pathname = `/secret-page`;
    }

    // Rewrite to URL
    return NextResponse.rewrite(req.nextUrl);
}