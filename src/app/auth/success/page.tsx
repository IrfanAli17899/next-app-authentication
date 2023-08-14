import React from 'react'
import AuthSuccess from './success'
import { cookies } from 'next/headers'

export default function Page() {
    const token = cookies().get('access_token')?.value as string;
    return (
        <AuthSuccess token={token} />
    )
}
