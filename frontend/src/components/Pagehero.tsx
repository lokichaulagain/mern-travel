import React from 'react'
import { Background, Parallax } from 'react-parallax'
import style from '../styles/scss/Pagehero.module.scss'

const Abouthero = ({ title }) => {
    // const img = 'https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  return (
    <Parallax strength={-300}>
        <Background className={`${style.bgImg}`}>
            <img src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="bgimg" />
        </Background>
        <div className={style.text}>
            <div className="txt container">
                <h1 className={`${style.heading}h1`}>{title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <div className="bread">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </Parallax>
  )
}

export default Abouthero
