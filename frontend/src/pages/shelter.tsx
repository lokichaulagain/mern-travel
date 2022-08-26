import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import ShelterButtonSection from "../components/shelter/ShelterButtonSection";
import ShelterCenterImage from "../components/shelter/ShelterCenterImage";
import ShelterAvailabilityForm from "../components/ShelterAvailabilityForm";
import styles from "../styles/scss/shelter/Shelter.module.scss";

export default function Shelter() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.shelter}`}>
        <HeroComponent />
      </div>
      <ShelterButtonSection />
      <ShelterAvailabilityForm />
      <div className={`${styles.shelter}`}>
        <ShelterCenterImage />
      </div>
      <Footer />
    </div>
  );
}
