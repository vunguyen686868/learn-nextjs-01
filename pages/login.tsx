import { authApi } from '@/api-client';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import * as React from 'react';


export default function LoginPage() {
    const router = useRouter()
    const { profile, login, logout } = useAuth({
        revalidateOnMount: false
    });

    const handleLoginClick = async () => {
        try {
            await login();
            //console.log('redirect to dashboard');
            router.push('/about')
        } catch (error) {
            console.log('failed to login', error);
        }
    }

    const handleGetProfileClick = async () => {
        try {
            const res = await authApi.getProfile();
            console.log(res);
        } catch (error) {
            console.log('failed to getProfile', error);
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
            <button onClick={() => { handleLoginClick() }}>Login</button>
            <button onClick={() => { handleGetProfileClick() }}>Get Profile</button>
        </div>
    );
}
