import CenterImageSection from "../components/CenterImageSection";
import HeroComponent from "../components/HeroComponent";
import PriceCardSection from "../components/Price/PriceCardSection";
import PriceSection2 from "../components/Price/PriceSection2";
import styles from "../styles/scss/Price.module.scss";

export default function Package() {
  return (
    <div>
      <div className={`${styles.bg}`}>
        <HeroComponent />
      </div>
      <PriceCardSection />
      <CenterImageSection />
      <PriceSection2 />
    </div>
  );
}
