import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { readMarkdownToJsObject } from '@/utils/posts';
import { Box, Container } from '@mui/system';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';
import Script from 'next/script';
import { Seo } from '@/components/common';

export interface IBlogPageProps {
    post: Post
}

export default function PostDetailPage({ post }: IBlogPageProps) {
    if (!post) return null
    return (
        <Box>
            <Seo data={{
                title: `${post.title} - Page`,
                description: post.description,
                url: 'https://www.google.com.vn/',
                thumbnailUrl: post.thumbnailUrl || ''
            }} />
            <Container>
                <p>{post.title}</p>
                <p>{post.description}</p>
                <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
            </Container>

            <Script src="/prism.js" strategy='afterInteractive'></Script>
        </Box>
    );
}

PostDetailPage.Layout = MainLayout
export const getStaticPaths: GetStaticPaths = async () => {
    //server-side
    //build-time --> html
    //Read all file from markdown file
    const postList = await readMarkdownToJsObject();
    const listSlug = postList.map((post: Post) => ({ params: { slug: post.slug } }));
    return {
        paths: listSlug,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps<IBlogPageProps> = async (context: GetStaticPropsContext) => {
    //server-side
    //build-time --> html
    //read all file markdown
    const postList = await readMarkdownToJsObject();

    //get Postslug
    const postSlug = context.params?.slug
    if (!postSlug) return { notFound: true }

    const post = postList.find((x) => x.slug === postSlug);
    if (!post) return { notFound: true }
    const file = await unified()
        .use(remarkParse)
        .use(remarkToc)
        //.use(remarkPrism, { plugins: ['line-numbers'] })
        .use(remarkPrism)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
        .use(rehypeDocument, { title: post.title })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(post.mdContent || '')
    post.htmlContent = file.toString()

    return {
        props: {
            post
        },
    }
}