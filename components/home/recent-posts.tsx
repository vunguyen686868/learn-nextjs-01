import { Post } from '@/models';
import { Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { PostCard } from './posts-card';

export function RecentPosts() {

    const postList: Post[] = [
        {
            id: 1,
            title: 'Making a design system from scratch',
            publishedDate: '1679925736560',
            description: '',
            tagList: ['Design', 'Pattern']
        },

        {
            id: 2,
            title: 'Creating pixel perfect icons in figma',
            publishedDate: '1679925736560',
            description: '',
            tagList: ['Figma', 'Icon Design']
        }

    ]
    return (
        <Box component='section' bgcolor='secondary.light' pt={2} py={4}>
            <Container>
                <Stack direction={'row'} mb={2} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems={'center'}>
                    <Typography variant='h5'>Recent Posts</Typography>
                    <MuiLink href='/blog' component={Link} sx={{ display: { xs: 'none', md: 'inline' } }}>View all</MuiLink>
                </Stack>
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row'
                    }}
                    spacing={3}
                    sx={{
                        '& > div': {
                            width: {
                                xs: '100%',
                                md: '50%'
                            }
                        }
                    }}>
                    {postList.map((post) => (
                        <Box key={post.id}>
                            <PostCard post={post} />
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
