import { LayoutProps } from '@/models/common';
import { Box, Stack } from '@mui/system';
import { Footer, Header } from '../common';


export function MainLayout({ children }: LayoutProps) {
    return (
        <Stack minHeight='100vh'>
            <Header />
            <Box component="main" flexGrow={1}>
                {children}</Box>

            <Footer />
        </Stack>
    );
}


