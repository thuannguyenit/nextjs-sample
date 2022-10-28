import { NextResponse } from 'next/server';

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'US';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
    matcher: '/secret-page',
};

export function middleware(req) {
    // Extract country. Default to US if not found.
    const country = (req.geo && req.geo.country) || 'US';

    console.log(`Visitor from ${country}`);

    // Specify the correct route based on the requests location
    if (country === BLOCKED_COUNTRY) {
        req.nextUrl.pathname = '/login';
    } else {
        req.nextUrl.pathname = `/secret-page`;
    }

    // Rewrite to URL
    return NextResponse.rewrite(req.nextUrl);
}