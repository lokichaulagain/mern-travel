import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "../../styles/scss/slick/rea";
import styles from "../../styles/scss/AboutSection1.module.scss";




const Carousel1 = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <img src="https://images.unsplash.com/photo-1661281819138-c22b3577cc48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/> */}




      <div className= {`${styles.caroumain}card`} style={{width: "18rem"}}>
      <div className="card-body">
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className={`${styles.caroudiv1}`}>
      <img src="https://images.unsplash.com/photo-1661259779141-282270fa9f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
      </div>
      </div>



    </div>

    <div className="carousel-item">
      
    <div className= {`${styles.caroumain}card`} style={{width: "18rem"}}>
      <div className="card-body">
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className={`${styles.caroudiv1}`}>
      <img src="https://images.unsplash.com/photo-1661259779141-282270fa9f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
      </div>
      </div>


    </div>
    <div className="carousel-item">
     
    <div className= {`${styles.caroumain}card`} style={{width: "18rem"}}>
      <div className="card-body border m-3  bg-light">
       <p className="card-text">Some quick example text to build on 
       the card title and make up the bulk of the card's content.</p>
      </div>
      <div className={`${styles.caroudiv1}`}>
      <img src="https://images.unsplash.com/photo-1661259779141-282270fa9f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
      </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default Carousel1;