import React from 'react'
import '../assets/style.css'
import Explore from '../components/landingPage/Explore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/landingPage/Header';
import ReachOut from '../components/landingPage/ReachOut';
import Testimonial from '../components/landingPage/Testimonial';
import Subscription from '../components/landingPage/Subscription';
import TakeStep from '../components/landingPage/TakeStep';

// comment out every component you are not working on. Example, if you are working on navbar and header, comment out the rest and leave the components you are working on. this will prevent you from having to see the codes in them while you work and your task. exmple is how i comment out the Navbar(an example)

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      {/* <Explore/>
      <ReachOut/>
      <Testimonial/>
      <Subscription/>
      <TakeStep/>
      <Footer/> */}
    </div>
  )
}

export default Home