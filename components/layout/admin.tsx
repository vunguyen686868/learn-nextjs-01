import { useAuth } from '@/hooks';
import { LayoutProps } from '@/models/common';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Auth } from '../common';


export function AdminLayout({ children }: LayoutProps) {
    const { profile, logout } = useAuth()
    const router = useRouter()

    const handleLogoutClick = async () => {
        try {
            await logout();
            router.push('/login')
        } catch (error) {
            console.log('failed to logout', error);
        }
    }

    return (
        <Auth>
            <h1>Admin layout</h1>
            <div>Sidebar</div>
            <p>Profile: {JSON.stringify(profile)}</p>
            <Link href='#'>Home</Link>
            <Link href='/about'>About</Link>
            <button onClick={() => { handleLogoutClick() }}>Logout</button>
            <div>{children}</div>
        </Auth>
    );
}


