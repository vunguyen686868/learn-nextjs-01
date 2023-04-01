import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {
    post: any
}

export default function PostDetailPage({ post }: PostPageProps) {
    const router = useRouter();

    if (!post) return null
    return (
        <div>
            <h1>Post Detail Page</h1>
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.description}</p>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {

    console.log('\nGet static paths');

    //Fetch get list ID posts
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts/?_page=1');
    const data = await response.json();
    const listIds = data.data.map((post: any) => ({ params: { postId: post.id } }));
    return {
        paths: listIds,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
    //server-side
    //build-time --> html

    //get PostID
    const postId = context.params?.postId
    console.log('\nget static props', context.params?.postId);
    if (!postId) return { notFound: true }

    //Fetch post content with postId
    const res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
    const data = await res.json()
    //console.log(data);

    return {
        props: {
            post: data
        },
        revalidate: 5
        //0-5s return cache page
        //6s-> when user request --> return old page --> get cache new page

    }
}