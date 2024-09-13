import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import ProfilePostCard from '../../components/profileCard/ProfilePostCard'
import Loader from '../../components/loader/Loader'

function Home() {
  return (
    <Layout>
        {/* <HeroSection/> */}
        <ProfilePostCard/>
        <Loader/>
    </Layout>
  )
}

export default Home