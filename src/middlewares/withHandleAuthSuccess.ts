import { MiddlewareFactory } from '@src/types';
import { NextResponse } from 'next/server'
import { NextFetchEvent, NextRequest } from 'next/server'

const AUTH_SUCCESS_PATH = '/auth/success'

export const withHandleAuthSuccess: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const { pathname } = request.nextUrl;
        if (pathname === AUTH_SUCCESS_PATH) {
            const loginUrl = new URL(`/auth/login?from=${pathname}`, request.url)
            const token = request.nextUrl.searchParams.get('access_token');
            if (!token) return NextResponse.redirect(loginUrl);
            const response = NextResponse.next();
            response.cookies.set({ name: "access_token", value: token, httpOnly: true, secure: true });
            return response
        }

        return next(request, _next);
    };
}

export const config = {
    matcher: AUTH_SUCCESS_PATH
}