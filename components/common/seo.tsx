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
    const { title, description, url, thumbnailUrl } = data;
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
        </Head>
    );
}
