import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Box, Icon, Stack, Typography } from "@mui/material";

export function Footer() {
    const socialLinks = [
        { icon: Facebook, url: 'https://google.com.vn' },
        { icon: Instagram, url: 'https://google.com.vn' },
        { icon: Twitter, url: 'https://google.com.vn' },
        { icon: LinkedIn, url: 'https://google.com.vn' }
    ]
    return (
        <Box component='footer' py={2} textAlign="center">
            <Stack direction={'row'} justifyContent="center" spacing={4}>

                {
                    socialLinks.map((item, index) => (
                        <Box key={index} component='a' href={item.url} target="_blank" rel="noopener noreferrer">
                            <Icon component={item.icon} fontSize="large" />
                        </Box>
                    ))
                }
            </Stack>
            <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
        </Box>
    );
}
