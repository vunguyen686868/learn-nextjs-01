import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ROUTES_LIST } from './routes';


export function HeaderDesktop() {
    const router = useRouter();

    return (
        <Box display={{ xs: 'none', md: 'block' }}>
            <Container>
                <Stack direction='row' justifyContent='flex-end'>
                    {ROUTES_LIST.map((route) => (
                        <MuiLink key={route.path} href={route.path} sx={{ ml: 2, fontWeight: 'medium' }} component={Link} className={clsx({ active: router.pathname === route.path })}>{route.label}</MuiLink>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
