import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EditBannerDialog from "../../components/EditBannerDialog";

const Id = () => {
  const [isUpdated, setIsUpdated] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  const [singleBanner, setSingleBanner] = useState({});
  const fetchSingleBanner = async (id: any) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/banner/${id}`);
      setSingleBanner(res.data);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBanner(id);
  }, [isUpdated, id]);
  
  return (
    <EditBannerDialog
      singleBanner={singleBanner}
      setIsUpdated={setIsUpdated}
      id={id}
    />
  );
};

export default Id;
