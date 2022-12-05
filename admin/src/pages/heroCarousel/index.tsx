import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import BannerTable from "../../components/BannerTable";
import Header from "../../components/Header";

export default function HeroCarousel() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [banners, setBanners] = useState([]);

  const fetchAllBanner = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/homeCarousel");
      setBanners(res.data);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllBanner();
  }, [isUpdated]);

  const deleteBanner = async (id: any) => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/homeCarousel/${id}`);
      setIsUpdated(2);
      deleteSuccess();
      console.log("Delete success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <>
      <Header pageTitle={"Banner"} />
      <BannerTable
        setIsUpdated={setIsUpdated}
        banners={banners}
        deleteBanner={deleteBanner}
      />
    </>
  );
}
