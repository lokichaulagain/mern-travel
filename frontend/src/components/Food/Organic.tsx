import React from 'react'
import { Parallax } from 'react-parallax'
import Progress from './Progress'

const Organic = () => {
    const bg ='https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  return (
    <div className='mt-5'>
      <Parallax bgImage={bg} strength={-100}>
        <div className='container'>
            <div className="row d-flex align-items-center" style={{ height: '500px'}}>
                <div className="col-md-6">
                    <div className="card p-5">
                        <h3 className="card-title fw-bold mb-3">Bio & Organic</h3>
                        <div className="card-subtitle mb-5">Our Natural Method</div>
                        <div className="card-text">
                            <p>Lorem ipsum dolor sit ame tion ullamco laboris nisi ut aliqu r in reprehenderit i fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Progress />
                </div>
            </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Organic
