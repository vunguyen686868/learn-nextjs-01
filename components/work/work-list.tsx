import { IWork } from '@/models';
import { Box, Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { WorkCard } from './work-card';

export interface IWorkListsProps {
    workList: IWork[]
}

export function WorkLists({ workList }: IWorkListsProps) {

    if (workList.length === 0) return null;
    return (
        <Box>
            {workList.map((work) => (
                <Fragment key={work.id}>
                    <WorkCard work={work} />
                    <Divider sx={{ my: 3 }} />
                </Fragment>
            ))}
        </Box>
    );
}
