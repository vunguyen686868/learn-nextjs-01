import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { readMarkdownToJsObject } from '@/utils/posts';
import { Divider, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import { format } from 'date-fns';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { Fragment } from 'react';

export interface BlogListPageProps {
    posts: Post[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
    return (
        <Box component={'section'} pt={2} py={4}>
            <Container>
                <Typography variant='h5' sx={{ mb: 2 }} fontWeight={'bold'}>Blog List Page</Typography>
                <Box>
                    {posts.map((post) => (
                        <Fragment key={post.id}>
                            <Box component={'a'} href={`/blog/${post.slug}`}>
                                <Typography variant='h4' sx={{ my: 2 }}>{post.title}</Typography>
                                <Stack direction={'row'} spacing={2}>
                                    <Typography>{format(Number(post.publishedDate), 'dd mm yyyy')}</Typography>
                                    <Divider orientation="vertical" flexItem />
                                    <Typography color="GrayText">{post.tagList.join(', ')}</Typography>
                                </Stack>
                                <Typography sx={{ my: 2 }}>{post.description}</Typography>
                                <Divider sx={{ my: 3 }} />
                            </Box>
                        </Fragment>
                    ))}
                </Box>
            </Container >
        </Box >
    );
}

BlogListPage.Layout = MainLayout
//server-side
//build-time --> html
export const getStaticProps: GetStaticProps<BlogListPageProps> = async (context: GetStaticPropsContext) => {
    //1.Read markdown to js obj
    const data = await readMarkdownToJsObject();

    return {
        props: {
            posts: data
        }
    }
}

