import * as React from 'react';
import { Card, CardContent, Divider, Typography, Stack } from '@mui/material'
import { Post } from '@/models';
import { format } from 'date-fns';
export interface PostCardProps {
    post: Post
}

export function PostCard({ post }: PostCardProps) {
    if (!post) return null;
    return (
        <Card>
            <CardContent>
                <Typography variant='h5' fontWeight={'bold'}>{post.title}</Typography>
                <Stack direction={'row'} my={2}>
                    <Typography variant='body1'>
                        {format(Number(post.publishedDate), 'dd MMM yyyy')}
                    </Typography>
                    <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
                    <Typography variant='body1'>
                        {post.tagList.join(', ')}
                    </Typography>
                </Stack>
                <Typography variant='body2'>{post.title}</Typography>
            </CardContent>
        </Card>
    );
}
