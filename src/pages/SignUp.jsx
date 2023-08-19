import React from 'react'
import '../assets/style.css'

const SignUp = () => {
  return (
    <div>
      <div id="header-section" class="rounded-[189px] py-2 font-['Montserrat']">
        <div class="flex justify-around pl-9">
            <a href="./index.html"><img src="./images/synapse.svg" alt="logo"></img></a>
            <div class="flex gap-2 bg-[#FFFFFF] border-1 border-[#355584] pl-4 pr-[70px] my-[7px] rounded-[30px]">
                <img src="./images/search.svg" alt="searchIcon"></img>
                <input class="border-0" type="text" name="" id="inp1" placeholder="Search for Course title"></input>
            </div>
        </div>
        <div class="flex justify-evenly">
            <a href="#" class="font-semibold no-underline pt-2.5 text-[#000000]">Courses</a>
            <a href="signIn.html" class="font-semibold no-underline pt-2.5 text-[#000000]">Sign in</a>
            <button onclick="btnTog()" class="bg-[#1BCBD8] px-3 rounded-2xl text-[#000000]">Join Now</button>
        </div>
    </div>

    <div id="signUp-grid" class="mt-[50px]">
        <div class="">
            <img src="./images/signvid.svg" alt=""></img>
        </div>
        <div class="mt-[40px] font-['Nunito']">
            <div class="flex">
                <button class="bg-[#FFFFFF] border-1 border-[#525252] text-[#525252] px-[90px] py-2 font-extrabold rounded-s-[12px] text-[14px] whitespace-nowrap">Sign In</button>
                <button onclick="btn1()" class="bg-[#1BCBD8] text-[#000000] font-extrabold text-[14px] px-[90px] py-2 rounded-e-[12px] whitespace-nowrap">Sign Up</button>
            </div>

            <div class="text-[26px] font-medium font-['Nunito'] mt-[60px] mb-5 text-center">Sign up</div>
    
            <form action="" class="flex flex-col gap-3 w-[400px] m-auto font-['Nunito']">
                <input type="email" name="email" id="inp2" placeholder="Enter your Email" class=" border-1 pl-4 border-[#B9B9B999] opacity-60"
                style="height: 50px; border-radius: 20px;" required></input>
               
                <button class="bg-[#1BCBD8] py-[15px] mt-3 rounded-2xl text-[#000000] text-[16px] font-semibold">Sign Up</button>
            </form>
    
            <div class="flex justify-center mt-6 gap-3 font-medium text-[16px]">
                <p class="text-[#525252]">Already on SynapseLearn?</p>
                <a href="signUp.html" class="text-[#4771B0]">Sign In</a>
            </div>       
        </div>
    </div>
    <p>do not code the navbar and footer. </p>
    
    </div>
  )
}

export default SignUp