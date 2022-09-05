import React from 'react'
import { Parallax } from 'react-parallax'
import Herotext from './Herotext';

const Hero = () => {
    const bg ="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
  return (
    <Parallax bgImage={bg} strength={-100}>
        <Herotext />
    </Parallax>
  )
}
 
export default Hero
