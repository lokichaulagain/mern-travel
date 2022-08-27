
import styles from "../../styles/scss/history/HistorySection1.module.scss"




const HistorySection1 = () => {
  return (
    <div className="container p-5">
      <div className="container p-5">
        <div className="row px-3">
          {/* Left side */}
          <div className="col-8">
            <div className="row py-3">
              <div className="col-8">
                <h4 className="h4 hHeading fw-bold">Group fondation</h4>
                <p className=" hPara fw-normal lh-lg pt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>

              <div className="col-4 loki">
                <h3 className="he fw-bold hTitle">1985</h3>
                <h6 className="h6 hPara fw-semibold " >Foundation</h6>
              </div>
            </div>





            <div className="row py-3 loki">
              <div className="col-4 ">
                <h3 className="he fw-bold hTitle">1990</h3>
                <h6 className="h6 hPara fw-semibold" >Association</h6>
              </div>

              <div className="col-8">
              <h4 className="h4 hHeading fw-bold">Join of country association</h4>
                <p className=" hPara fw-normal lh-lg pt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>
            </div>




            <div className="row py-3">
              <div className="col-8">
                <h4 className="h4 hHeading fw-bold">We are bigger than ever</h4>
                <p className=" hPara fw-normal lh-lg pt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>

              <div className="col-4 loki">
                <h3 className="he fw-bold hTitle">2002</h3>
                <h6 className="h6 hPara fw-semibold" >Expansion</h6>
              </div>
            </div>





            <div className="row py-3">
              <div className="col-4 loki">
                <h3 className="he fw-bold hTitle">2010</h3>
                <h6 className="h6 hPara fw-semibold" >Complete online</h6>
              </div>

              <div className="col-8">
              <h4 className="h4 hHeading fw-bold">Group fondation</h4>
                <p className=" hPara fw-normal lh-lg pt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>
            </div>


































           
          </div>

          {/* Right side */}
          <div className="col-4">
            <p>Alive by</p>
            <div className="container" style={{ display: "flex" }}>
              <span className="h2">25</span>
              <span>Years</span>
            </div>
            <hr />

            <p>Traks length</p>
            <div className="container" style={{ display: "flex" }}>
              <span className="h2">8000</span>
              <span>km</span>
            </div>
            <hr />

            <p>Alive by</p>
            <div className="container" style={{ display: "flex" }}>
              <span className="h2 ">25</span>
              <span>+</span>
            </div>
            {/* Single item carousel */}

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection1;
