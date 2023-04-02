import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Box, Icon, Stack, Typography } from "@mui/material";

export function Footer() {
    const socialList = [
        { icon: Facebook, url: 'https://google.com.vn' },
        { icon: Instagram, url: 'https://google.com.vn' },
        { icon: Twitter, url: 'https://google.com.vn' },
        { icon: LinkedIn, url: 'https://google.com.vn' },
    ]
    return (
        <Box component='footer' py={2} textAlign="center">
            <Stack direction={'row'} justifyContent='center' spacing={4}>
                {
                    socialList.map((social, index) => (
                        <Box key={index} component={'a'} href={social.url} target='_blank' rel='noopener noreferrer'>
                            <Icon component={social.icon} fontSize='large' />
                        </Box>
                    ))
                }
            </Stack>
            <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
        </Box>
    );
}
