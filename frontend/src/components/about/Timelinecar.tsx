import React from 'react'
import Slider from 'react-slick'
import { timeline } from './reviewSource'

const Timelinecar = () => {
    const settings = ({
        dots: true,
        infinite: false,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    })
  return (
    <div className="container">
        <Slider {...settings}>
            {/* <div className="container"></div> */}
            {timeline.map((timeline, index) => (
                <div key={index} className='d-sm-flex align-items-center gap-4'>
                    <div className="time">
                        <h4 className="h4 fw-bold">{timeline.year}</h4>
                        <p>{timeline.work}</p>
                    </div>
                    <div className="desc">
                        <h5 className="h5 fw-bold">{timeline.heading}</h5>
                        <p>{timeline.desc}</p>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default Timelinecar
