import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface AuthProps {
    children: any
}


export function Auth({ children }: AuthProps) {
    const router = useRouter()
    const { profile, firstLoading } = useAuth()

    useEffect(() => {
        // loading & username not exists --> redirect login page
        if (!firstLoading && !profile?.username) router.push('/login')
    }, [router, profile, firstLoading])

    if (!profile?.username) return <p>Loading ...</p>
    return (
        <div>
            {children}
        </div>
    );
}
