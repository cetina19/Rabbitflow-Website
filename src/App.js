import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import AboutUs from './components/about-us/AboutUs';
import RoadMap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";
import Whitepaper from "./components/whitepaper/Whitepaper";
import Wallet from "./components/wallet/Wallet";
import BuyCollection from "./components/buy-collection/BuyCollection";
import ContactUs from "./components/contact-us/ContactUs";


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/Home'  element={<Home/>} />
        <Route exact path='/AboutUs'  element={<AboutUs/>} />
        <Route exact path='/RoadMap'  element={<RoadMap/>} />

        <Route exact path='/Team'  element={<Team/>} />
        <Route exact path='/Whitepaper'  element={<Whitepaper/>} />
        <Route exact path='/Wallet'  element={<Wallet/>} />
        <Route exact path='/BuyCollection'  element={<BuyCollection/>} />
        <Route exact path='/ContactUs'  element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default App