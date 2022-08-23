import React from 'react'
import Image from "next/image";
import img1 from "../../public/images/1.jpeg"
import img2 from "../../public/images/2.jpeg"
import img3 from "../../public/images/3.jpeg"

const HeroCarousel = () => {
  return (
    <div>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className=""></button> 
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <Image src={img1} alt=""  />    
        {/* <Image src="/frontend/public/images/5.jpeg" layout='fill' alt=""  />     */}

          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
        <Image src={img2} alt=""  />    
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image src={img3} alt=""  />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      
    </div>

    </div>
  )
}

export default HeroCarousel