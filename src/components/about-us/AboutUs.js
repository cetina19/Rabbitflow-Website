import React from 'react'
import {SiTwitter} from 'react-icons/si'
import {SiDiscord} from 'react-icons/si'
import Navbar from '../navbar/Navbar'

import './AboutUs.css'

const AboutUs = () => {
  return (
    
    <div className="aboutUsInfo">
        <Navbar/>
            <h1>ABOUT US</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus ac bibendum mi, sit amet tristique neque. Nullam efficitur facilisis luctus.
            Duis nec ultrices mi. Nam porttitor lacinia est, in laoreet lectus pellentesque vitae.
            Fusce metus dolor, aliquam quis suscipit eu, dapibus ut massa.
            </p>
    </div>
    
  )
}

export default AboutUs;