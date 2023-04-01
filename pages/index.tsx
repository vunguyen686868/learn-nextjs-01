import { HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/system'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {


  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  )
}

Home.Layout = MainLayout
export default Home
