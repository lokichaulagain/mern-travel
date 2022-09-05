import React from 'react'
import Slider from 'react-slick'
import { discover } from './reviewSource'
import style from '../../styles/scss/Discovercar.module.scss'

const Discovercar = () => {
    const settings = ({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        easing: 'liner',
        slidesToShow: 3,
        slidesToScroll: 1,
        // mobileFirst: true,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
  return (
    <Slider {...settings} className={style.slider}>
        {discover.map((discover, index) => (
            <div key={index} className={style.key}>
                {/* <div className="row row-cols-1"> */}
                    <div className="card-group m-2">
                        <div className={`${style.myCard} card border-0`} >
                            <img className='card-img-top' src={discover.image} alt="" />
                            <div className="card-body p-3">
                                <div className="card-title text-center h4 my-3 fw-bold">{discover.heading}</div>
                                <div className="card-text text-center mb-4">{discover.desc}</div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        ))}
    </Slider>
  )
}

export default Discovercar
