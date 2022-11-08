import React from 'react';
import SingleSideOne from '../../components/singleBlog/SingleSideOne';
import BlogSideTwo from '../../components/myblog/BlogSideTwo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Abouthero from '../../components/Pagehero';



const MySingleBlog = () => {
  return (
    <div>
        <Navbar/>
        <Abouthero title="blog"/>

        {/* <SingleSideOne/> */}
        {/* <BlogSideTwo/> */}

        <div>
          <div className="container pt-5">
            <div className="row row-cols-2 row-cols-sm-1 mt-5">
              <div className="col-lg-8 col-sm-12">
              <SingleSideOne/>
              </div>
              <div className="col col-lg-4 col-sm-12">
              <BlogSideTwo/>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default MySingleBlog


{/* <div>
          <div className="container pt-5">
            <div className="row row-cols-2 row-cols-sm-1 mt-5">
              <div className="col-lg-8 col-sm-12">
                <MyCardComp />
              </div>
              <div className="col col-lg-4 col-sm-12">
                <BlogSideTwo />
              </div>
            </div>
          </div>
        </div> */}