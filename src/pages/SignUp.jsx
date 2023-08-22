import React from 'react'
import '../assets/style.css'
import search from '.././assets/img/search.svg'
import logo from '.././assets/img/synapse.svg'
import video from '.././assets/img/video.svg'

const SignUp = () => {
  return (
    <div>
      <div id="header-section" class="rounded-[189px] py-2 font-['Montserrat'] mx-[100px]">
        <div className="flex justify-around pl-9">
            <a href="./index.html"><img src={logo} alt="logo"></img></a>
            <div className="flex gap-2 bg-[#FFFFFF] border-[1px] border-[#355584] pl-4 pr-[70px] my-[7px] rounded-[30px]">
                <img src={search} alt="searchIcon"></img>
                <input className="border-0" type="text" name="" id="inp1" placeholder="Search for Course title"></input>
            </div>
        </div>
        <div className="flex justify-evenly">
            <a href="#" className="font-semibold no-underline pt-2.5 text-[#000000]">Courses</a>
            <a href="signIn.html" className="font-semibold no-underline pt-2.5 text-[#000000]">Sign in</a>
            <button onclick="btnTog()" className="bg-[#1BCBD8] px-3 rounded-2xl text-[#000000]">Join Now</button>
        </div>
    </div>

    <div id="signUp-grid" className="mt-[50px] mx-[120px]">
        <div className="">
            <img src={video} alt=""></img>
        </div>
        <div className="mt-[40px] font-['Nunito']">
            <div className="flex">
                <button className="bg-[#FFFFFF] border-[1px] border-[#525252] text-[#525252] px-[90px] py-2 font-extrabold rounded-s-[12px] text-[14px] whitespace-nowrap">Sign In</button>
                <button onclick="btn1()" className="bg-[#1BCBD8] text-[#000000] font-extrabold text-[14px] px-[90px] py-2 rounded-e-[12px] whitespace-nowrap">Sign Up</button>
            </div>

            <div className="text-[26px] font-medium font-['Nunito'] mt-[60px] mb-5 text-center">Sign up</div>
    
            <form action="" className="flex flex-col gap-3 w-[400px] m-auto font-['Nunito']">
                <input type="email" name="email" id="inp2" placeholder="Enter your Email" className=" border-[1px] pl-4 border-[#B9B9B999] opacity-60"
                 required></input>
               
                <button className="bg-[#1BCBD8] py-[15px] mt-3 rounded-2xl text-[#000000] text-[16px] font-semibold">Sign Up</button>
            </form>
    
            <div className="flex justify-center mt-6 gap-3 font-medium text-[16px]">
                <p className="text-[#525252]">Already on SynapseLearn?</p>
                <a href="#" className="text-[#4771B0]">Sign In</a>
            </div>       
        </div>
    </div>
    {/* <p>do not code the navbar and footer. </p> */}
    
    </div>
  )
}

export default SignUp