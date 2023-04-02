import { IWork } from '@/models';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { WorkLists } from '../work';


export function FeatureWorks() {

    const workList: IWork[] = [
        {
            id: '1',
            title: 'Designing Dashboards',
            createdAt: '1679925736560',
            tagList: ['Dashboard'],
            thumbnailUrl: 'https://res.cloudinary.com/kimwy/image/upload/v1648712410/learn-nextjs/item1_cbidwn.jpg',
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },

        {
            id: '2',
            title: 'Vibrant Portraits of 2020',
            createdAt: '1679925736560',
            tagList: ['Illustration'],
            thumbnailUrl: 'https://res.cloudinary.com/kimwy/image/upload/v1648712410/learn-nextjs/item3_jlfuun.jpg',
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },

        {
            id: '3',
            title: '36 Days of Malayalam type',
            createdAt: '1679925736560',
            tagList: ['Typography'],
            thumbnailUrl: 'https://res.cloudinary.com/kimwy/image/upload/v1648712410/learn-nextjs/item3_jlfuun.jpg',
            shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }
    ]
    return (
        <Box component={'section'} pt={2} py={4}>
            <Container>
                <Typography variant='h5' sx={{ mb: 2 }}>Featured works</Typography>
                <WorkLists workList={workList} />
            </Container>
        </Box>
    );
}
