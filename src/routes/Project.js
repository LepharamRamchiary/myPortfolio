import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herobg from '../components/Herobg'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Herobg heading="PROJECTS." text="Some of my most recent works" />
      <Footer />
    </div>
  )
}

export default Project