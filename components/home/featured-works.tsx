import { IWork } from '@/models';
import { Divider, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { Fragment } from 'react';
import { WorkList } from '../work';


export function FeaturedWork() {
    const workList: IWork[] = [
        {
            id: '1',
            title: 'Designing Dashboards',
            thumbnailUrl: 'https://res.cloudinary.com/kimwy/image/upload/v1648712410/learn-nextjs/item1_cbidwn.jpg',
            createdAt: '',
            tagList: ['Dashboard'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            id: '2',
            title: 'Vibrant Portraits of 2020',
            thumbnailUrl: 'https://res.cloudinary.com/kimwy/image/upload/v1648712410/learn-nextjs/item3_jlfuun.jpg',
            createdAt: '',
            tagList: ['Illustration'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }, {
            id: '3',
            title: '36 Days of Malayalam type',
            thumbnailUrl: 'https://res.cloudinary.com/kimwy/image/upload/v1648712410/learn-nextjs/item1_cbidwn.jpg',
            createdAt: '',
            tagList: ['Typography'],
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }
    ]
    return (
        <Box component={'section'} pt={2} py={4}>
            <Container>
                <Typography variant='h5' sx={{ mb: 2 }}>Featured works</Typography>
                {/* Box Worklist */}
                <WorkList workList={workList} />
            </Container>
        </Box>
    );
}
