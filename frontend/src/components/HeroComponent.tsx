import styles from "../styles/scss/HeroComponent.module.scss"

const HeroComponent = () => {
  return (
    <div className="container  py-5 px-5">
      <div className="container py-5 px-4">
        <div className=" pt-5 px-4">
          <div className=" pt-5">
            <div className="container pt-5 ">
              <div className="container pt-5 ">
                <h1 className= {`${styles.heroHeading}`} >THE TREK</h1>
                <h5  className= {`${styles.heroPara}`}>TALENT WINS GAMES, BUT TEAMWORK WIN CHAMPIONSHIPS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
