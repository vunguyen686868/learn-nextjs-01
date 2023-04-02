import { IWork } from '@/models';
import { Chip, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react';

export interface IWorkCardProps {
    work: IWork
}
export function WorkCard({ work }: IWorkCardProps) {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Box width={{ xs: '100%', md: '246px' }} flexShrink={0}>
                <Image src={work.thumbnailUrl} width={246} height={180} layout="responsive" alt="work thumbnail" />
            </Box>
            <Box>
                <Typography variant='h4' fontWeight={'bold'}>{work.title}</Typography>
                <Stack direction={'row'} my={2}>
                    <Chip color="secondary" label={format(Number(work.createdAt), 'yyyy')} size="small" />
                    <Typography ml={3} color="GrayText">{work.tagList.join(',')}</Typography>
                </Stack>
                <Typography>{work.shortDescription}</Typography>
            </Box>
        </Stack>
    );
}
