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
    
    useEffect(() => {
      window.location.href = "https://google.com/about";
    }, []);
}
