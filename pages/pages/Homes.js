import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import PricipalMessage from '../components/PricipalMessage'
import News from '../components/News'
import BasicInfo from '../components/BasicInfo'
import ReserveSeat from '../components/ReserveSeat'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'


function Homes() {
  return (
    <div>
         <Header/>
        <Navbar/>
        {/* <Logo/> */}
        <Slider/>
        <PricipalMessage/>
        <News/>
       
        <BasicInfo/>
        <ReserveSeat/>
        <Footer/>
        <BottomFooter/>
    </div>
  )
}

export default Homes