import React from 'react'
import {SiTwitter} from 'react-icons/si'
import {SiDiscord} from 'react-icons/si'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import './NavbarStyle.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul  className='nav-menu'>
        <li><a href='/Home'><u>HOME</u></a></li>
        <li><a href='/AboutUs'>ABOUT US</a></li>
        <li><a href='/RoadMap'>ROADMAP</a></li>
        <li><a href='/Team'>TEAM</a></li>
        <li><a href='/WhitePaper'>WHITE PAPER</a></li>
        <li><a href='/Wallet'>CONNECT WALLET</a></li>
        <li><a href='/BuyCollection'>BUY COLLECTION</a></li>
        <li><a href='/ContactUs'>CONTACT US</a></li>
        <li className='icons'><a href="https://twitter.com"><SiTwitter className='icon' size={25} /></a></li>
        <li><a href="https://discord.com"><SiDiscord className='icon' size={25} /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar;