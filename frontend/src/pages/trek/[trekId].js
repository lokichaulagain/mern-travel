import React, { useState, useEffect } from "react";
import CenterImageSection from "../../components/CenterImageSection";
import Pagehero from "../../components/Pagehero";
import SingleTrekComponent1 from "../../components/SingleTrek/SingleTrekComponent1";
import SingleTrekSection2 from "../../components/SingleTrek/SingleTrekSection2";
import SingleTrekSection3 from "../../components/SingleTrek/SingleTrekSection3";
import styles from "../../styles/scss/SingleTrek.module.scss";
import packages from "../../packages.json";
import { useRouter } from "next/router";

export default function SingleTrek() {
  const [singlepackage, setSinglepackage] = useState([]);
  const router = useRouter();
  
  const index = router.query.trekId;

  useEffect(() => {
    fdata();
  }, [router.query.trekId]);

  let fdata = async () => {
    let pack = packages.find((item) => item.id == index);
    setSinglepackage(pack);
  };


  return (
    <div>
      <div className={`${styles.bg}`}>
        <Pagehero title={singlepackage.id} />
        {/* <SingleTrekComponent1 /> */}
      </div>
      <SingleTrekSection2  singlepackage={singlepackage} />
      <CenterImageSection />
      <div className="mt-4">
      <SingleTrekSection3 />
      </div>
    </div>
  );
}
