import React from "react";
import TreksContactusCard from "../../components/Treks/TreksContactusCard";
import TreksServiceCard from "../../components/Treks/TreksServiceCard";
import styles from "../../styles/scss/Treks.module.scss";
import TreksCardSection from "../../components/Treks/TreksCardSection";
import CenterImageSection from "../../components/CenterImageSection";
import Pagehero from "../../components/Pagehero";

function Trek() {
  return (
    <div className={`${styles.pageWrapper}`}>
   
      <div className="mb-5">
        <Pagehero title='Treks' />
      </div>
      <TreksCardSection />
      <CenterImageSection/>
      <TreksContactusCard />
      <TreksServiceCard />
    </div>
  );
}

export default Trek;
