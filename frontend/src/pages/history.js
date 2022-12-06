import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import HistorySection1 from "../components/History/HistorySection1";
import HistorySection2Slider from "../components/History/HistorySection2Slider";
import styles from "../styles/scss/History.module.scss";
import packages from "../packages.json"

export default function History() {
  // const [singlepackage, setSinglepackage] = useState([]);
  // const router = useRouter();
  
  // const index = router.query.trekId;

  // useEffect(() => {
  //   fdata();
  // }, [router.query.trekId]);

  // let fdata = async () => {
  //   let pack = packages.find((item) => item.id == index);
  //   setSinglepackage(pack);
  // };

  // console.log(singlepackage);

  
  return (
    <div>
      <div className={`${styles.bg}`}>
        <HeroComponent />
      </div>
      <HistorySection1  singlepackage={packages}/>
      {/* <HistorySection2Slider singlepackage={singlepackage}/> */}
    </div>
  );
}
