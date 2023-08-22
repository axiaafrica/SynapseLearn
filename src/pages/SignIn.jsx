import React from 'react'
import '../assets/style.css'
import search from '.././assets/img/search.svg'
import logo from '.././assets/img/synapse.svg'

const SignIn = () => {
  return (
    <div className=""> 
      <div id="header-section" className="rounded-[189px] py-2 font-['Montserrat']">
        <div className="flex justify-around pl-9">
        <a href="./index.html"><img src={logo} alt="logo"/></a>
        <div className="flex gap-2 bg-[#FFFFFF] pl-4 pr-[70px] my-[7px] rounded-[30px]" id='search'>
            <img src={search} alt="searchIcon"/>
            <input className="border-0" type="text" name="" id="inp1" placeholder="Search for Course title"/>
        </div>
        </div>
    <div className="flex justify-evenly">
        <a href="#" className="font-semibold no-underline pt-2.5 text-[#000000]">Courses</a>
        <a href="#" className="font-semibold no-underline pt-2.5 text-[#000000]">Sign in</a>
        <button onclick="btnTog()" className="bg-[#1BCBD8] px-3 rounded-2xl text-[#000000]">Join Now</button>
    </div>
    </div>


<div className="flex gap-0 justify-center mt-9 font-['Nunito']">
    <button className="bg-[#1BCBD8] text-[#000000] px-[120px] py-2.5 font-extrabold rounded-s-[12px] text-[16px]">Sign In</button>
    <button onclick="btn1()" className="bg-[#FFFFFF] text-[#525252] font-extrabold text-[16px] px-[120px] py-2.5 rounded-e-[12px] " id='signup'>Sign Up</button>
</div>

<div className="text-[28px] font-medium font-['Nunito'] mt-[70px] mb-5 text-center">Welcome Back</div>

<form action="" className="flex flex-col gap-3 w-[400px] m-auto font-['Nunito']">
    <input type="email" name="email" id="inp2" placeholder="Enter your Email" className=" pl-4 opacity-60"
     required/>
    <input type="password" name="pswd" id="inp3" placeholder="Enter your Password" className=" pl-4 opacity-60"
    required/>
    <div className="flex justify-between">
        <div className='flex gap-2'>
            <span className="text-[#525252] text-[16px] font-medium">Remember Me</span>
            <input type="checkbox" name="check" id="checkbox"/>
        </div>
        <div className="font-medium text-[#4771B0]">Forgot Password?</div>
    </div>
    <button className="bg-[#1BCBD8] py-[15px] mt-3 rounded-2xl text-[#000000] text-[16px] font-semibold">Sign In</button>
</form>

<div className="flex justify-center mt-6 gap-3 font-medium text-[16px]">
    <p className="text-[#525252]">New to SynapseLearn?</p>
    <a href="#" className="text-[#4771B0]">Sign Up</a>
</div>

</div>

  )
}

export default SignIn