import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
}

export default function PostDetailPage(props: PostDetailPageProps) {
    const router = useRouter();
    return (
        <div>
            <h1>Params Page</h1>
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
}

export async function getServerSideProps() {

    await new Promise((resolve) => { setTimeout(resolve, 3000) })
    console.log('getServerSideProps')
    return {
        props: {}
    }
}