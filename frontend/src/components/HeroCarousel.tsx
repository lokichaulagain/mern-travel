import React from 'react'
import Slider from 'react-slick'
import style from '../styles/scss/HeroCarousel.module.scss'

const HeroCarousel = () => {
    const settings = ({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        // centerMode: true,
        // centerPadding: '50px',
        // lazyLoad: 'ondemand',
        // arrows: false,
        easing: 'linear',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
      });
  
      return (
    <div className={`${style.cover} container my-5 gap-5`}>
      <Slider {...settings} className={`${style.slider} d-flex gap-5`}>
        {/* <div className="container"> */}
            <div className={`${style.carasoule}`}>
                <div className={`${style.image}`}>
                    <img src='https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' alt='image' />
                </div>
            </div>
            <div className={`${style.carasoule}`}>
                <div className={`${style.image}`} >
                    <img src='https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='image' />
                </div>
            </div>
            <div className={`${style.carasoule}`}>
                <div className={`${style.image}`}>
                    <img src='https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='image' />
                </div>
            </div>
            <div className={`${style.carasoule}`}>
                <div className={`${style.image}`}>
                    <img src='https://images.unsplash.com/photo-1504288145234-919e7bbc6d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='image' />
                </div>
            </div>
            <div className={`${style.carasoule}`}>
                <div className={`${style.image}`}>
                    <img src='https://images.unsplash.com/photo-1519261959468-137656974aa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' alt='image' />
                </div>
            </div>
            <div className={`${style.carasoule}`}>
                <div className={`${style.image}`}>
                    <img src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='image' />
                </div>
            </div>
        {/* </div> */}
      </Slider>
    </div>
  )
}

export default HeroCarousel
