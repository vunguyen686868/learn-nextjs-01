import { Seo } from '@/components/common'
import { HeroSection, RecentPosts } from '@/components/home'
import { FeatureWorks } from '@/components/home/featured-works'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/system'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {


  return (
    <Box>
      <Seo data={{
        title: "Homepage",
        description: "descriptn",
        url: 'https://www.google.com.vn/',
        thumbnailUrl: ''
      }} />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  )
}

Home.Layout = MainLayout
export default Home
