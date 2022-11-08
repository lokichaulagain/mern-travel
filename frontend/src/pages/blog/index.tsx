import React from 'react';
import Navbar from '../../components/Navbar';
import HeroComponent from '../../components/HeroComponent';
import styles from "../../styles/scss/Treks.module.scss";
import MyCardComp from '../../components/myblog/MyCardComp';
import BlogSideTwo from '../../components/myblog/BlogSideTwo';
import Footer from '../../components/Footer';
import mystyle from "../../styles/scss/myBlog.module.scss";
import Abouthero from '../../components/Pagehero';



const MyBlog = () => {
  return (
    <div >
      <Navbar/> 
      {/* <HeroComponent/> */}
      <Abouthero title='blog'/>
      
     {/* <div className={`${mystyle.MainBlogComp} row row-cols-1 row-cols-lg-2`}>
      <div className='container'>
      <div className='col col-lg-8'>
       <MyCardComp/>
       </div>
      <div className='col col-lg-4'> 
      <BlogSideTwo/>
      </div>
      </div>
       </div> */}
        <div>
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
        </div>

       <Footer/>
       
       

     </div>
  )
}

export default MyBlog 