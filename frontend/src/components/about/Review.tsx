import React from 'react'
import Reviewcar from './Reviewcar'

const Review = () => {
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="leftBody col-md-8 col-sm-12">
                <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 row-cols-lg-2">
                    <div className="col"><p>Sagar Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip erud exercitation ullamco. Exiquip ex ea commodo con sequat sit amet consectetur adipiscing elitsed do eiusmode.</p></div>
                    <div className="col"><p>Loluptate velit esse cillum doloreorem ipsu idunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt uta labore incita ipsum dolor sitscing elitsed do eiusmode.ud exercitation ullamco. Lore mise.</p></div>
                </div>
            </div>
            <div className="rightBody col-md-4 col-sm-12">
                <Reviewcar />
            </div>
        </div>
    </div>
  )
}

export default Review
