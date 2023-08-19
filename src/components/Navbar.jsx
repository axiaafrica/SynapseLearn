import React from 'react'
import '../assets/style.css'
import search from '.././assets/img/search.svg'
import logo from '.././assets/img/synapse.svg'

const Navbar = () => {
  let d = document.body;
  d.style.fontFamily= "Montserrat";
  return (
    <div id="header-section" class="rounded-[189px] py-2  mx-[100px]">
      <div class="flex justify-around pl-9">
        <a href="./index.html"><img src={logo} alt="logo"></img></a>
        <div class="flex gap-2 bg-[#FFFFFF] border-[1px] border-[#355584] pl-4 pr-[70px] my-[7px] rounded-[30px]">
        <img src= {search} alt="searchIcon"></img>
        <input class="border-0" type="text" name="" id="inp1" placeholder="Search for Course title"></input>
    </div>
</div>
<div class="flex justify-evenly">
    <a href="#" class="hover:scale-[120%] font-semibold no-underline pt-2.5 text-[#000000]">Courses</a>
    <a href="SignIn.jsx" class="font-semibold no-underline pt-2.5 text-[#000000]">Sign in</a>
    <button class="bg-[#1BCBD8] px-3 rounded-2xl text-[#000000]">
        <a href="" class="text-[#000000] no-underline">Join Now</a></button>
</div>
</div>
  )
}

export default Navbar