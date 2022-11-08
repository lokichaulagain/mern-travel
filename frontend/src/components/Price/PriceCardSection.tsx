import { motion } from "framer-motion";

const PriceCardSection = () => {
  const packages = [
    {
      title: " Everest Base Camp",
      fee: "USD 1800",
      l1: "5 star",
      l2: "Free cancellation ",
      l3: "No booking fees",
      l4: "Duration  14 Days",
      l5: "Transport  Flight",
      l6: "Activities  Trekking",
      l7: "Accommodation  Hotels/ Lodge/ Tents/ All Meals Included",
      l8: "Group Size Min 2s",
      l9: "Arrival and Departure from Tribhuvan International Airport",
    },

    {
      title: "Everest 3 passes",
      fee: "USD 2500",
      l1: "5 star",
      l2: "Free cancellation ",
      l3: "No booking fees",
      l4: "Duration  13 Days",
      l5: "Transport  Flight",
      l6: "Activities  Trekking",
      l7: "Accommodation  Hotels/ Lodge/ Tents/ All Meals Included",
      l8: "Group Size Minimum 2",
      l9: "Arrival and Departure from Tribhuvan International Airport",
    },

    {
      title: " Gokyo Trek      ",
      fee: "USD 1600",
      l1: "5 star",
      l2: "Free cancellation ",
      l3: "No booking fees",
      l4: "Duration  14 Days",
      l5: "Transport  Flight",
      l6: "Activities  Trekking",
      l7: "Accommodation  Hotels/ Lodge/ Tents/ All Meals Included",
      l8: "Group Size Min 2s",
      l9: "Arrival and Departure from Tribhuvan International Airport",
    },

    {
      title: " Everest Base Camp",
      fee: "USD 1350",
      l1: "5 star",
      l2: "Free cancellation ",
      l3: "No booking fees",
      l4: "Duration  14",
      l5: "Transport  Flight",
      l6: "Activities  Trekking",
      l7: "Accommodation  Hotels/ Lodge/ Tents/ All Meals Included",
      l8: "Group Size Any      ",
      l9: "Arrival and Departure from Tribhuvan International Airport",
    },

    {
      title: " Mardi Himal Trek      ",
      fee: "USD 1150",
      l1: "5 star",
      l2: "Free cancellation ",
      l3: "No booking fees",
      l4: "Duration  14",
      l5: "Transport  Flight",
      l6: "Activities  Trekking",
      l7: "Accommodation  Hotels/ Lodge/ Tents/ All Meals Included",
      l8: "Group Size Minimum 2      ",
      l9: "Arrival and Departure from Tribhuvan International Airport",
    },

    {
      title: " Langtang Trek ",
      fee: "USD 1400",
      l1: "5 star",
      l2: "Free cancellation ",
      l3: "No booking fees",
      l4: "Duration  14",
      l5: "Transport  Flight",
      l6: "Activities  Trekking",
      l7: "Accommodation  Hotels/ Lodge/ Tents/ All Meals Included",
      l8: "Group Size Minimum 2      ",
      l9: "Arrival and Departure from Tribhuvan International Airport",
    },
  ];

  return (
    <div className="container-fluid py-5 ">
      <div className="container">
        <div className="row container py-4 ">
          {packages &&
            packages.map((packages: any, index: any) => (
              <div
                key={index}
                className="col-12 col-sm-12 col-md-12 col-lg-4 col-xxl-4 pb-5">
                <motion.div
                  whileHover={{ y: 30 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}>
                  <div className="card text-center shadow-lg border-0">
                    <div className="card-body p-5">
                      <h3 className=" h4 mainColor fw-bold ">{packages.title}</h3>
                      <p className="h3 pt-3">
                        $ <span className=" h2 mainColor fw-bold">{packages.fee}</span>
                      </p>
                      <p className=" card-text mainColor fw-semibold pt-3">{packages.l4}</p>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l1}</li>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l2}</li>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l3}</li>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l4}</li>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l5}</li>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l6}</li>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l7}</li>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l8}</li>
                      <li className="paraColor liStyleRm pt-3 ">{packages.l9}</li>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCardSection;
