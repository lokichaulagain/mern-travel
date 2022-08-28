// import React from "react";
// import styles from "../../styles/scss/shelter/ShelterButtonSection.module.scss";

// const ShelterButtonSection = () => {
//   return (
//     <div>
//       {/* 4 button  */}
//       <div className="container px-4 d-flex justify-content-center">
//         <div className="row p-5">
//           <div className="col p-5 gap-5">
//             <button
//               type="button"
//               className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
//             >
//               Large button
//             </button>

//             <button
//               type="button"
//               className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
//             >
//               Large button
//             </button>

//             <button
//               type="button"
//               className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
//             >
//               Large button
//             </button>

//             <button
//               type="button"
//               className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
//             >
//               Large button
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* carousel row */}

//       <div className="container pb-5  mb-5 px-5">
//         <div className="container px-5">
//           <div className="row px-4">
//             <div className="col">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
//               architecto illum similique voluptatum, vel nulla laudantium quidem
//               iste consequatur sit odit quae ut quis beatae, rerum dolorum id
//               culpa. Veniam alias saepe quibusdam hic placeat adipisci vitae
//               obcaecati voluptate eius libero? Obcaecati voluptatem magni porro
//               rem similique enim veniam dolores?
//             </div>

//             <div className="col">
//               <h2 className="h2 ">CRODA DEL LAGO REFUGE</h2>
//               <h6 className="h6 pt-2 pb-4">Nevegal Mountain</h6>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
//                 eiusmod tempor incididunt utlabore et dolore magna aliqua.
//                 Utenim ad minim veniam quis nostrud exercitatio.
//               </p>
//               <div className="row">
//                 <h6 className="col">Nevegal</h6>
//                 <h6 className="col">1250 m</h6>
//                 <h6 className="col">$40 per night</h6>
//               </div>
//             </div>
//           </div>
//           {/* multiCarousel and button row */}
//           <div className="row  my-3 mx-2">
//             <div className="col">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
//               modi enim nulla reiciendis fuga asperiores repellendus! Eius
//               mollitia numquam repudiandae enim iure rerum, officiis fuga odio
//               dolores laborum minus assumenda optio architecto, temporibus
//               corrupti expedita porro
//             </div>

//             <div className="col">
//               <button type="button" className="btn btn-primary  mx-3 btn-lg">
//                 Large button
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShelterButtonSection;

import styles from "../../styles/scss/shelter/ShelterButtonSection.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import person1 from "../../../public/images/5.jpeg";

const ShelterButtonSection = () => {
  return (
    <div>
      {/* 4 button  */}
      <div className="container px-4 d-flex justify-content-center">
        <div className="row p-5">
          <div className="col p-5 gap-5">
            <button
              type="button"
              className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
            >
              Large button
            </button>

            <button
              type="button"
              className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
            >
              Large button
            </button>

            <button
              type="button"
              className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
            >
              Large button
            </button>

            <button
              type="button"
              className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
            >
              Large button
            </button>
          </div>
        </div>
      </div>
      {/* carousel row */}

      <div className="container pb-5  mb-5 px-5">
        <div className="container px-5">
          <div className="row px-4">
            <div className="col-6">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col">
              <h2 className="h2 ">CRODA DEL LAGO REFUGE</h2>
              <h6 className="h6 pt-2 pb-4">Nevegal Mountain</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua.
                Utenim ad minim veniam quis nostrud exercitatio.
              </p>
              <div className="row">
                <h6 className="col">Nevegal</h6>
                <h6 className="col">1250 m</h6>
                <h6 className="col">$40 per night</h6>
              </div>
            </div>
          </div>
          {/* multiCarousel and button row */}
          <div className="row  my-3 mx-2">
            <div className="col-6">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col">
              <button type="button" className="btn btn-primary  mx-3 btn-lg">
                Large button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterButtonSection;
