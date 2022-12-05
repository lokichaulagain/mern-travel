import React, { useContext, useEffect, useState } from "react";
import BlogTable from "../../components/blog/BlogTable";
import Header from "../../components/Header";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

function Blog() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const fetchAllBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/blog");
      setBlogs(res.data);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, [isUpdated]);

  const deleteBlog = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/blog/" + id);
      setIsUpdated(4);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <>
      <Header pageTitle={"Blogs"} />
      <BlogTable
        blogs={blogs}
        deleteBlog={deleteBlog}
      />
    </>
  );
}

export default Blog;
