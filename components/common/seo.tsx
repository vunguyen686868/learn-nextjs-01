import Head from 'next/head';
import * as React from 'react';

export interface ISeoData {
    title: string,
    description: string,
    url: string,
    thumbnailUrl: string
}

export interface ISeoProps {
    data: ISeoData
}

export function Seo({ data }: ISeoProps) {
    return (
        <Head>
            <title>{data.title}</title>
            <meta name="title" content={data.title} />
            <meta name="description" content={data.description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={data.url} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:image" content={data.thumbnailUrl} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={data.url} />
            <meta property="twitter:title" content={data.title} />
            <meta property="twitter:description" content={data.description} />
            <meta property="twitter:image" content={data.thumbnailUrl} />
        </Head >
    );
}
