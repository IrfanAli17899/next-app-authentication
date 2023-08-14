"use client"
import React from 'react'
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
    const { replace } = useRouter();
    const query = useSearchParams();
    const login = () => {
        axios.post('https://api.escuelajs.co/api/v1/auth/login', {
            "email": "john@mail.com",
            "password": "changeme"
        }).then(({ data: { access_token } }) => {
            replace(`/auth/success?access_token=${access_token}&to=${query.get('from') || '/'}`)
        })
    }
    return (
        <div>
            <h1>Client Side Login Page</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}
