import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import PriceCardSection from "../components/Price/PriceCardSection";
import PriceSection2 from "../components/Price/PriceSection2";
import styles from "../styles/scss/Price.module.scss"


export default function Price() {
  return (
    <div>
    <div className={`${styles.bg}`} >
        <Navbar/>
        <HeroComponent/>
        </div>
        <PriceCardSection/>
        <PriceSection2/>
        <Footer/>
  
    </div>
  )
}
