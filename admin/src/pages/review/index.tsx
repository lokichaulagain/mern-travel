import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ReviewTable from "../../components/review/ReviewTable";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

function Review() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteReview = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/review/" + id);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [reviews, setReviews] = useState([]);
  const fetchAllReview = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/review");
      setReviews(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllReview();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Reviews"} />
      <ReviewTable
        deleteReview={deleteReview}
        reviews={reviews}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
}

export default Review;
