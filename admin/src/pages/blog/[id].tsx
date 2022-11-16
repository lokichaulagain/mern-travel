import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SingleRowTableItem from "../../components/SingleRowTableItem";
import Header from "../../components/Header";
import { EventContext } from "../../../context/EventContext";
import { BlogContext } from "../../../context/BlogContext";

const Id = () => {
  const { fetchSingleBlog, singleBlog, blogs, deleteBlog, newBlog, handleBlogInputChange, handleBlogFormSubmit } = useContext(BlogContext);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchSingleBlog(id);
  }, [id]);

  return (
    <>
      <Header pageTitle={`Blog / ${id}`} />

      <div className="row customCard">
        <SingleRowTableItem
          name={"Title"}
          value={singleBlog.title}
        />
        <SingleRowTableItem
          name={"Thumbnail"}
          value={singleBlog.thumbnail}
        />

        <SingleRowTableItem
          name={"Description"}
          value={singleBlog.description}
        />
        <SingleRowTableItem
          name={"createdAt"}
          value={singleBlog.createdAt}
        />
      </div>
    </>
  );
};

export default Id;
