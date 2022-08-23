import React from 'react'

const NewsLetter = () => {
  return (
   <div className="container px-5">
   <div className="container px-5">
    <div className="row px-3">
        <div className="col col-lg-4">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
        </div>

        <div className="col col-lg-4">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
        </div>

        <div className="col col-lg-4  d-grid gap-2 ">
          <button className="btn btn-primary" type="button">Subscribe</button>
        </div>

       
        </div>
        <div className="form-check" style={{display:"flex",justifyContent:"center"}}>
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
          <label className="form-check-label" htmlFor="flexCheckChecked">
          By click subscribe you accept the terms of service and the privacy policy.
          </label>
        </div>
    </div>
   </div>
  )
}

export default NewsLetter