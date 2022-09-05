import styles from "../../styles/scss/Blog.module.scss";
import SideOne from "./SideOne";
import SideTwo from "./SideTwo";


const Myblog = () => {
  return (
    <>
  

<div className="container">
  <div className=" row row-cols-1 row-cols-lg-2">
    <div className="col col-lg-8"><SideOne/></div>
    <div className="col col-lg-4"><SideTwo/></div>
  </div>

</div>
    
    </>
  )
}

export default Myblog