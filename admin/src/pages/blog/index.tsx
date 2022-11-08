import React from "react";
import BlogTable from "../../components/blog/BlogTable";
import Header from "../../components/Header";

function Blog() {
  return (
    <>
     <Header pageTitle={"blogs"}/>
      <BlogTable />
    </>
  );
}

export default Blog;
