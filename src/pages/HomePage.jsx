import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/Homecard'
import JobListings from '../components/JobListenings'
import ViewAllJob from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCard />
    <JobListings isHome={true} />
    <ViewAllJob />
    </>
  )
}

export default HomePage