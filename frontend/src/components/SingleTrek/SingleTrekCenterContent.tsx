import styles from "../../styles/scss/singleTrek/SingleTrek.module.scss"

const SingleTrekCenterContent = () => {
  return (
    <div className="container py-5 px-5 ">
      <div className="container px-5">
        <div className="row py-5 my-5 px-4">
          <div className="col">
          <h6 className={`${styles.title}`} >Data</h6>
            <h1 className={`${styles.title}`}>25 JAN</h1>
          </div>

          <div className="col">
            <h6 className={`${styles.title}`} >Distance</h6>
            <h1 className={`${styles.title}`}>8.5 KM</h1>
          </div>

          <div className="col">
          <h6 className={`${styles.title}`} >Group size</h6>
            <h1 className={`${styles.title}`}>10</h1>
          </div>

          <div className="col">
          <h6 className={`${styles.title}`} >Duration</h6>
            <h1 className={`${styles.title}`}>2 DAYS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrekCenterContent;
