import { IWork } from '@/models';
import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { WorkCard } from './work-card';

export interface IWorkListProps {
    workList: IWork[]
}

export function WorkList({ workList }: IWorkListProps) {
    if (workList.length === 0) return null;
    return (
        <Box>
            {
                workList.map((work) => (
                    <Fragment key={work.id}>
                        <WorkCard work={work} />
                        <Divider sx={{ my: 3 }} />
                    </Fragment>
                ))
            }
        </Box>
    );
}
