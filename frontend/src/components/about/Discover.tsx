import React from 'react'
import Discovercar from './Discovercar'

const Discover = () => {
  return (
    <div className='container my-5'>
        <div className="row row-md-cols-1 row-lg-cols-1">
            <div className="left col-lg-3 mb-5">
                <div>
                    <h1 className="h2 fw-bold">Discover Us</h1>
                    <p>Our main services</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit e dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-9">
                <Discovercar />
            </div>
        </div>
    </div>
  )
}

export default Discover
