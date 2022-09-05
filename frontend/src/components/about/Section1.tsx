// import React from 'react';
import styles from "../../styles/scss/AboutSection1.module.scss";
// import "slick-carousel/slick/slick.css"; 
import Carousel1 from "./Carousel1";


const Section1 = () => {
  return (
    <>
    <div className='sectionone'>


        {/* first section */}
    <div className='firstSection1'>
    <img src="https://templates.themekit.dev/alpins/media/hd-3.jpg" className= {`${styles.mainImage} img-fluid`}/>
    </div>

    {/* second section */}
    <div className={`${styles.firstSection2}`}>
  <div className="row">
    <div className="col">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Modi similique esse nesciunt veritatis maxime quos nemo, suscipit earum provident natus ducimus
        dolorum adipisci consequatur aperiam architecto,
       neque, delectus animi doloribus. neque, delectus animi doloribus.neque,
        delectus animi doloribus. neque, delectus animi doloribus</p>
    </div>
    <div className="col">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Modi similique esse nesciunt veritatis maxime quos nemo, suscipit earum provident natus ducimus
        dolorum adipisci consequatur aperiam architecto,
       neque, delectus animi doloribus. neque, delectus animi doloribus.neque,
        delectus animi doloribus. neque, delectus animi doloribus</p>
    </div>


    <div className="col">
   
    <Carousel1/>
    </div>
  </div>
    </div>
    </div>
    </>
  )
}

export default Section1