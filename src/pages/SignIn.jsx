import React from 'react'
import '../assets/style.css'

const SignIn = () => {
  return (
    <div> 
      <div id="header-section" class="rounded-[189px] py-2 font-['Montserrat']">
        <div class="flex justify-around pl-9">
        <a href="./index.html"><img src="./images/synapse.svg" alt="logo"/></a>
        <div class="flex gap-2 bg-[#FFFFFF] border-1 border-[#355584] pl-4 pr-[70px] my-[7px] rounded-[30px]">
            <img src="./images/search.svg" alt="searchIcon"/>
            <input class="border-0" type="text" name="" id="inp1" placeholder="Search for Course title"/>
        </div>
    </div>
    <div class="flex justify-evenly">
        <a href="#" class="font-semibold no-underline pt-2.5 text-[#000000]">Courses</a>
        <a href="#" class="font-semibold no-underline pt-2.5 text-[#000000]">Sign in</a>
        <button onclick="btnTog()" class="bg-[#1BCBD8] px-3 rounded-2xl text-[#000000]">Join Now</button>
    </div>
    </div>

<div class="flex gap-0 justify-center mt-9 font-['Nunito']">
    <button class="bg-[#1BCBD8] text-[#000000] px-[120px] py-2.5 font-extrabold rounded-s-[12px] text-[16px]">Sign In</button>
    <button onclick="btn1()" class="bg-[#FFFFFF] border-1 border-[#525252] text-[#525252] font-extrabold text-[16px] px-[120px] py-2.5 rounded-e-[12px] ">Sign Up</button>
</div>

<div class="text-[28px] font-medium font-['Nunito'] mt-[70px] mb-5 text-center">Welcome Back</div>

<form action="" class="flex flex-col gap-3 w-[400px] m-auto font-['Nunito']">
    <input type="email" name="email" id="inp2" placeholder="Enter your Email" class=" border-1 pl-4 border-[#B9B9B999] opacity-60"
    style="height: 50px; border-radius: 20px;" required/>
    <input type="password" name="pswd" id="inp3" placeholder="Enter your Password" class="border-1 pl-4 border-[#B9B9B999] opacity-60"
    style="height: 50px; border-radius: 20px;"/>
    <div class="flex justify-between">
        <div>
            <span class="text-[#525252] text-[16px] font-medium">Remember Me</span>
            <input type="checkbox" name="check" id="checkbox"/>
        </div>
        <div class="font-medium text-[#4771B0]">Forgot Password?</div>
    </div>
    <button class="bg-[#1BCBD8] py-[15px] mt-3 rounded-2xl text-[#000000] text-[16px] font-semibold">Sign In</button>
</form>

<div class="flex justify-center mt-6 gap-3 font-medium text-[16px]">
    <p class="text-[#525252]">New to SynapseLearn?</p>
    <a href="signUp.html" class="text-[#4771B0]">Sign Up</a>
</div>

</div>
  )
}

export default SignIn