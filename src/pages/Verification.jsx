import React from 'react'
import '../assets/style.css'
import search from '.././assets/img/search.svg'
import logo from '.././assets/img/synapse.svg'

const Verification = () => {
  return (
    // header-section
    <div>
      <div id="header-section" className="rounded-[189px] py-2 font-['Montserrat']">
    <div className="flex justify-around pl-9">
    <a href="./index.html"><img src={logo} alt="logo"/></a>
    <div className="flex gap-2 bg-[#FFFFFF] border-[1px] border-[#355584] pl-4 pr-[70px] my-[7px] rounded-[30px]">
        <img src={search} alt="searchIcon"/>
        <input className="border-0" type="text" name="" id="inp1" placeholder="Search for Course title"/>
    </div>
    </div>
    <div className="flex justify-evenly">
    <a href="#" className="font-semibold no-underline pt-2.5 text-[#000000]">Courses</a>
    <a href="#" className="font-semibold no-underline pt-2.5 text-[#000000]">Sign in</a>
    <button onclick="btnTog()" className="bg-[#1BCBD8] px-3 rounded-2xl text-[#000000] font-semibold">Join Now</button>
    </div>
    </div>

    <div className="text-center text-[28px] font-[Nunito] font-semibold mt-[60px]">Enter OTP recieved</div>

      <form className=' w-[400px] m-auto'> 
        <div className="flex justify-center gap-5 mt-[38px]">
          <input type="text" name="" inputMode='numeric' className="numeric" maxLength={1}/>
          <input type="text" name="" inputMode='numeric' className="numeric" maxLength={1}/>
          <input type="text" name="" inputMode='numeric' className="numeric" maxLength={1}/>
          <input type="text" name="" inputMode='numeric' className="numeric" maxLength={1}/>
        </div>
        <button className="bg-[#1BCBD8] py-[15px] w-[400px] mt-[66px] rounded-2xl text-[#000000] text-[16px] font-semibold">Join Now</button>
     </form>
      
     <div class="flex justify-center mt-6 gap-3 font-medium text-[16px]">
                <p class="text-[#525252]">Didn't receive OTP?</p>
                <a href="signUp.html" class="text-[#4771B0]">request for New OTP</a>
     </div> 
     <div class="flex justify-center mt-6 gap-3 font-medium text-[16px]">
                <p class="text-[#525252]">Already on SynapseLearn?</p>
                <a href="signUp.html" class="text-[#4771B0]">Sign In</a>
     </div> 

</div>
  )
}

export default Verification