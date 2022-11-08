import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { discover } from './reviewSource'
import style from '../../styles/scss/Discovercar.module.scss'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

const initial = {
    hidden: {
        opacity: 0,
        y: 200,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            ease: 'easeIn',
            duration: 0.7,
            delayChildren: 0.5,
            staggerChildren: 0.8,
        },
    },
}

const item = {
    
    hidden: {
        y: 200,
        opacity: 0,
    },

    visible: {
        y: 0,
        opacity: 1,

        transition: {
            ease: 'easeInOut',
            duration: '.5',
            
            viewport: {
                once: true,
            }
        },

    }
}

const Discovercar = () => {
    // const controls = useAnimation();
    // const [ref, inview] = useInView()

    // useEffect(() => {
    //     if (inView) {
    //         controls.start('visible')
    //     }
    // }, [controls, inView])

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
            <motion.div variants={ initial } initial='hidden' animate='visible' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} key={index} className={style.key}>
                {/* <div className="row row-cols-1"> */}
                    <motion.div variants={item} viewport={{ once: true }} className="card-group m-2">
                        <div className={`${style.myCard} card border-0`} >
                            <img className='card-img-top' src={discover.image} alt="" />
                            <div className="card-body p-3">
                                <div className="card-title text-center h4 my-3 fw-bold">{discover.heading}</div>
                                <div className="card-text text-center mb-4">{discover.desc}</div>
                            </div>
                        </div>
                    </motion.div>
                {/* </div> */}
            </motion.div>
        ))}
    </Slider>
  )
}

export default Discovercar
