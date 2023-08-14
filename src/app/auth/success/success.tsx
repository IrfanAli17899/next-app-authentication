"use client"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function AuthSuccess({ token }: { token: string }) {
    const query = useSearchParams();
    const { replace } = useRouter();

    useEffect(() => {
        if (token) {
            localStorage.setItem('access_token', token);
            replace(query.get('to') || '/');
        }
    }, [query, token])

    return (
        <div>Auth Success: {token}</div>
    )
}
