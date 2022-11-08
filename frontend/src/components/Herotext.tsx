import React from "react";
import HeroCarousel from "./HeroCarousel";
import style from "../styles/scss/Hero.module.scss";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Herotext = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className={`${style.heroBody} container`}>
        <div className="row">
          <div className={`${style.leftBody} col-md-6`}>
            {/* <h1>Amazing Mountan to explore</h1> */}
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className={`${style.heading} h1 w-md-50`}
            >
              the Most Amazing Mountain to explore
            </motion.h1>
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.05 }}
            >
              Do not follow where the path may lead. Go instead where there is
              no path and leave a trail.
            </motion.p>
          </div>
          <div className={`${style.rightBody} col-md-6`}>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", dutaion: 0.5, delay: 0.05 }}
              className={style.stat}
            >
              <span className="h6">Altitude</span>
              <CountUp start={0} end={8848} duration={2} delay={0.75}>
                {({ countUpRef }) => (
                  <div className={style.num}>
                    <span ref={countUpRef} className="h4 fw-bold">
                      m
                    </span>
                  </div>
                )}
              </CountUp>
            </motion.div>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", dutaion: 0.5, delay: 0.07 }}
              className={style.stat}
            >
              <span className="h6">Tracks</span>
              <CountUp start={0} end={20} duration={2} delay={0.75}>
                {({ countUpRef }) => (
                  <div className={style.num}>
                    <span ref={countUpRef} className="h4 fw-bold"></span>
                  </div>
                )}
              </CountUp>
            </motion.div>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", dutaion: 0.5, delay: 0.1 }}
              className={style.stat}
            >
              <span className="h6">Tourists/year</span>
              <CountUp start={0} end={2000} duration={2} delay={0.75}>
                {({ countUpRef }) => (
                  <div className={style.num}>
                    <span ref={countUpRef} className="h4 fw-bold">
                      +
                    </span>
                  </div>
                )}
              </CountUp>
            </motion.div>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 0.05 }}
            >
              <HeroCarousel />
            </motion.div>
          </div>
        </div>
      </div>

      <div className={style.overlay}></div>
    </div>
  );
};

export default Herotext;
