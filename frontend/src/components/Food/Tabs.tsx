import React from 'react'
import { tabs, dinner } from './tabSource'
import style from '../../styles/scss/Tabs.module.scss'
import { motion } from 'framer-motion'


const Tabs = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
  return (
    <div className='container mt-5'>
        <h1 className='h1 text-center fw-bold'>Food</h1>
        {/* creating tabs */}
        <ul className="nav nav-pills mb-5 d-flex justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item mr-5" role="presentation">
                {/* data-bs-toggle should be same as id in tab-content */}
                <button className="nav-link active" id="launchi" data-bs-toggle="pill" data-bs-target="#launch" type="button" role="tab">Launch</button>
            </li>
            <li className="nav-item mr-5" role="presentation">
                <button className="nav-link" id="dinneri" data-bs-toggle="pill" data-bs-target="#dinner" type="button" role="tab">Dinner</button>
            </li>
            <li className="nav-item mr-5" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#breakfast" type="button" role="tab">Breakfast</button>
            </li>
            <li className="nav-item mr-5" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#special" type="button" role="tab">Speciality</button>
            </li>
        </ul>
        {/* tab contents */}
        <div className="tab-content" id="pills-tabContent">
            <motion.div variants={ container } initial='hidden' animate='show' className="tab-pane fade show active" id="launch" role="tabpanel">
                <motion.div variants={ item } className="row">
                    {tabs.map((tab, index) => (
                        <div key={index} className="col-md-6 mb-5">
                            <div className="card border-0 d-xs-flex gap-3 flex-row">
                                <div className="img">
                                    <img src={tab.img} alt="" className={`${style.image}`} />
                                </div>
                                <div className="card-body p-0">
                                <div className="top d-lg-flex flex-lg-row justify-content-between">
                                    <h4 className="h5 fw-bold">{tab.name}</h4>
                                    <h4 className="h5">Nrs. {tab.price}</h4>
                                </div>
                                <div className="card-text font-size-sm">{tab.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
            <div className="tab-pane fade" id="dinner" role="tabpanel">
                <div className="row">
                    {dinner.map((dinner, index) => (
                        <div key={index} className="col-md-6 mb-5">
                            <div className="card border-0 d-flex gap-3 gap-xs-2 flex-row">
                                <div className="img">
                                    <img src={dinner.img} alt="" className={`${style.image}`} />
                                </div>
                                <div className="card-body p-0">
                                <div className="top d-sm-flex flex-sm-row justify-content-between">
                                    <h4 className="h5 fw-bold">{dinner.name}</h4>
                                    <h6 className="h6">Nrs. {dinner.price}</h6>
                                </div>
                                <div className="card-text font-size-sm">{dinner.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="tab-pane fade" id="breakfast" role="tabpanel">
                <div className="row">
                    {dinner.map((dinner, index) => (
                        <div key={index} className="col-md-6 mb-5">
                            <div className="card border-0 d-flex gap-3 gap-xs-2 flex-row">
                                <div className="img">
                                    <img src={dinner.img} alt="" className={`${style.image}`} />
                                </div>
                                <div className="card-body p-0">
                                <div className="top d-sm-flex flex-sm-row justify-content-between">
                                    <h4 className="h5 fw-bold">{dinner.name}</h4>
                                    <h6 className="h6">Nrs. {dinner.price}</h6>
                                </div>
                                <div className="card-text font-size-sm">{dinner.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="tab-pane fade" id="special" role="tabpanel">
                <div className="row">
                    {dinner.map((dinner, index) => (
                        <div key={index} className="col-md-6 mb-5">
                            <div className="card border-0 d-flex gap-3 gap-xs-2 flex-row">
                                <div className="img">
                                    <img src={dinner.img} alt="" className={`${style.image}`} />
                                </div>
                                <div className="card-body p-0">
                                <div className="top d-sm-flex flex-sm-row justify-content-between">
                                    <h4 className="h5 fw-bold">{dinner.name}</h4>
                                    <h6 className="h6">Nrs. {dinner.price}</h6>
                                </div>
                                <div className="card-text font-size-sm">{dinner.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabs
