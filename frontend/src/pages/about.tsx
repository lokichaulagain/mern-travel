import React from 'react'
import Pagehero from '../components/Pagehero'
import Navbar from '../components/Navbar'
import Review from '../components/about/Review'
import Discover from '../components/about/Discover'
import Timelinecar from '../components/about/Timelinecar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
      <Navbar />
      <Pagehero title='About Us' />
      <Review />
      <div className="discover py-5" style={{ backgroundColor: 'rgb(238, 243, 247)' }}>
        <Discover />
      </div>
      <div className="my-5 my-md-4 py-5 my-sm-2">
        <Timelinecar />
      </div>
      <Footer/>
    </div>
  )
}

export default about
