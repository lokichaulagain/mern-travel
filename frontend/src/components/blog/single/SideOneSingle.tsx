import React from 'react';
import { FiFacebook,FiTwitter,FiLinkedin} from 'react-icons/fi';
import {FaGooglePlusG} from "react-icons/fa";




const SideOneSingle = () => {
  return (
    <>
<div className="col ">

    <div className="row">
        <img src ="https://templates.themekit.dev/alpins/media/image-18.jpg"/>
    </div>


    <div className="row w-25 mt-4">
   <div className="col bg-primary"><FiFacebook/></div>
    <div className="col bg-info"><FiTwitter/></div>
    <div className="col bg-success"><FiLinkedin/></div>
    <div className="col bg-danger"><FaGooglePlusG/></div>
    </div>

    <div className="row mt-4">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Possimus ea iure facere minima cum harum tenetur, quibusdam suscipit optio sint culpa temporibus nobis molestias fugiat
 praesentium. Veniam sit praesentium quaerat?
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima, nobis incidunt laboriosam magni dolores, repellendus odio ut iusto unde necessitatibus sequi asperiores dicta laudantium nostrum 
 delectus perferendis qui quia!
    </div>
    <div className="row mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia 
        magnam voluptatum quo reiciendis facere. Facere magni officia quas?
         Consequatur modi minus fuga perspiciatis impedit voluptate est ipsam nihil velit.
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam odit sit ut asperiores maxime, dolor unde perferendis mollitia voluptatum animi? Aliquam non quo cumque maxime odio eum sequi a error.
    </div>
</div>

    </>
  )
}

export default SideOneSingle