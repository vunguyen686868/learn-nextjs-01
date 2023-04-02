import { ISeoData, Seo } from '@/components/common'
import { FeaturedWork, HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/system'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {

  const HomePageSeoData: ISeoData = {
    title: 'Homepage title',
    description: 'Homepage des',
    url: 'https://www.google.com.vn/',
    thumbnailUrl: ''
  }
  return (
    <Box>
      <Seo data={HomePageSeoData} />
      <HeroSection />
      <RecentPosts />
      <FeaturedWork />
    </Box>
  )
}

Home.Layout = MainLayout
export default Home
