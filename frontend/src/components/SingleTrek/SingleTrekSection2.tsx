import Image from "next/image";

const SingleTrekSection2 = ({ singlepackage }: any) => {
  return (
    <div className="container-fluid py-5">
      {singlepackage && (
        <div className="container">
          <div className="row container pb-4 ">
            {/* <div className="col  pb-4 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className=" lh-lg mainColor">{singlepackage.description}</p>
            </div> */}

            <div className="single_trek_img mb-4">
              <Image
                src={singlepackage.image}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="col-12">
              {singlepackage &&
                singlepackage.list &&
                singlepackage.list.map((li: any, index: any) => (
                  <div
                    key={index}
                    className="col mainColor p pb-2   ">
                    {li}
                    <hr />
                  </div>
                ))}

              {/* <div className="col"> */}

              {/* <div className="row">
                <div className="col mainColor h6 pb-2 fw-bold">Mountains</div>
                <div className="col mainColor fw-normal">Monte Bianco</div>
              </div> */}

              {/* <div className="row">
                <div className="col mainColor h6 pb-2 fw-bold"> Address</div>
                <div className="col mainColor fw-normal">
                  Monte Veneto Italy
                </div>
              </div> */}
              {/* 
              <div className="row">
                <div className="col mainColor h6 pb-2 fw-bold"> Altitude</div>
                <div className="col mainColor fw-normal">1900 m</div>
              </div> */}
              {/* 
              <div className="row ">
                <div className="col mainColor h6 pb-2 fw-bold"> Area</div>
                <div className="col mainColor fw-normal">582.45 m2</div>
              </div> */}

              {/* <div className="row ">
                <div className="col mainColor h6 pb-2 fw-bold"> Refuges</div>
                <div className="col mainColor fw-normal">17</div>
              </div> */}

              {/* <div className="row">
                <div className="col mainColor h6 pb-2 fw-bold"> Facilities</div>
                <div className="col mainColor fw-normal">All types</div>
              </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTrekSection2;
