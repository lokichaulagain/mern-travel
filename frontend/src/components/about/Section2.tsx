import React from 'react';
import styles from "../../styles/scss/AboutSection1.module.scss";
import Carousel2 from './Carousel2';
import Carousel3 from './Carousel3';

const Section2 = () => {
  return (
    <div className='sectiontwo'>

    <div className={`${styles.secondSection1}`}>
    <div className="row">
    <div className="col-4">part1</div>
    <div className="col-8">part2
    <Carousel2/>
    </div>
  </div>
    </div>

    <div className={`${styles.secondSection2}`}>
    <div className="row">
    {/* <div className="col-2">part1</div>
    <div className="col-4">part2</div>
    <div className="col-2">part2</div>
    <div className="col-4">part2</div> */}
    <Carousel3/>
  </div>  
    </div>
    <hr  className='{`${styles.secondSection2hr}`}'/>
    </div>
  )
}

export default Section2