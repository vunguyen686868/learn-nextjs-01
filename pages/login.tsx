import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks';
import { LoginPayload } from '@/models';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import * as React from 'react';


export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuth({
        revalidateOnMount: false
    });

    const handleLoginSubmit = async (payload: LoginPayload) => {
        try {
            await login(payload);
            console.log('redirect to dashboard');
            router.push('/');
        } catch (error) {
            console.log('failed to login', error);
        }
    }

    //Flow UI:
    // User click login button in login-form.tsx
    // --> call handleLoginSubmit in login-form.tsx
    //          --> call onSubmit in login.tsx (login parent)
    return (
        <Box>
            <Paper elevation={4} sx={{ mx: 'auto', mt: 8, p: 4, maxWidth: '480px', textAlign: 'center' }}>
                <Typography component={'h1'} variant='h5'>Easy Frontend - Login</Typography>
                <LoginForm onSubmit={handleLoginSubmit} />
            </Paper>
        </Box>
    );
}
