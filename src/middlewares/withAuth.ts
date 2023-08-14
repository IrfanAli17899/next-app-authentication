import { MiddlewareFactory } from '@src/types';
import { NextResponse } from 'next/server'
import { NextFetchEvent, NextRequest } from 'next/server'

const PROTECTED_ROUTES = [
    '/'
]

export const withAuth: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const { pathname } = request.nextUrl;
        if (
            PROTECTED_ROUTES.includes(pathname) &&
            !request.cookies.get('access_token')
        ) {
            const loginUrl = new URL(`/auth/login?from=${pathname}`, request.url)
            return NextResponse.redirect(loginUrl);
        }
        return next(request, _next);
    };
}
