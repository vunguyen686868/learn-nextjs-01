//import Header from '@/components/common/header';
// import dynamic from 'next/dynamic';
import { AdminLayout, MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

//load Header dynamic via client
// const Header = dynamic(() => import('@/components/common/header'), { ssr: true })
export interface AboutPageProps {
}

const AboutPage: NextPageWithLayout = (props: AboutPageProps) => {

    const [postList, setPostList] = useState([])
    const router = useRouter()
    const page = router.query?.page || 1
    console.log('About query', router.query)

    //run via client side not server side
    useEffect(() => {
        if (!page) return

        (async () => {
            //fetch data from client side via js
            const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/?_page=${page}`);
            const data = await response.json();
            //console.log('fetch data', data);
            setPostList(data.data);
        })()
    }, [page]);

    const handleClick = () => {
        router.push(
            {
                pathname: '/about',
                query: {
                    page: (Number(page) || 1) + 1
                }
            }, undefined, {
            shallow: true
        })
    }
    return (
        <Box>
            <Typography component="h1" variant='h3' color='primary.main'>About Page</Typography>
            <ul className='post-list'>
                {postList.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button onClick={() => { handleClick() }}>Next page</button>
        </Box>
    );
}


export async function getStaticProps() {
    console.log('get static props')
    return {
        props: {}
    }
}
// export async function getServerSideProps() {
//     return {
//         props: {}
//     }
// }
AboutPage.Layout = AdminLayout
export default AboutPage