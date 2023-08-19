import React from 'react'
import '../.././assets/style.css'
import graph1 from '../.././assets/img/graph1.svg'
import graph2 from '../.././assets/img/graph2.svg'
import tri1 from '../.././assets/img/tri1.svg'
import tri2 from '../.././assets/img/tri2.svg'
import img1 from '../.././assets/img/img1.svg'
import img2 from '../.././assets/img/img2.svg'
import img3 from '../.././assets/img/img3.svg'
import img4 from '../.././assets/img/img4.svg'
import ellipse from '../.././assets/img/ellipse.svg'
const Header = () => {
  return (
    <div>
   <div id="second" class="mt-4 h-[939px] bg-[#B8EFF3] mx-[120px] pt-[78px] pl-12 pr-2 rounded-[40px] relative font-[Nunito]">
        <img src={graph1} alt="" class="absolute left-2 top-9"/>
        <img src={graph2} alt="" class="absolute right-[34.2%] top-[123px]"/>
        <div id="texts-one" class="flex flex-col gap-[28px]">
            <p class="text-[36px] font-bold">Get Started <span class="text-[#4771B0] font-bold">Learning</span> Any Tech Skill</p>
            <p class="text-[19px] w-[75%]">Level up your tech skills with our modern e-learning platform. Whether you're a tech pro or a curious beginner, we've got 
                exciting courses just for you. Join now and embark on an incredible learning adventure!</p>  
            <div id="buttons" class="flex gap-1 cursor-none">
                <div class="bg-[#FFFFFF] border-2 border-[#355584] rounded-[29px] w-[162px] py-2 text-center">
                    <p class="text-[24px] font-bold">120K+</p>
                    <p>Enrolled students</p>
                </div>
                <div class="bg-[#FFFFFF] border-2 border-[#355584] rounded-[29px] w-[162px] py-2 text-center">
                    <p class="text-[24px] font-bold">47+</p>
                    <p>Partners</p>
                </div>
                <div class="bg-[#FFFFFF] border-2 border-[#355584] rounded-[29px] w-[162px] py-2 text-center">
                    <p class="text-[24px] font-bold">160+</p>
                    <p>Qualified teachers</p>
                </div>
            </div>
        </div>
        <div id="graphs" class="relative top-4 right-6">
            <img id="ellipse" src={ellipse} alt=""/>
            <img id="img1" src={img1} alt=""/>
            <img id="img2" src={img2} alt=""/>
            <img id="img3" src={img3} alt=""/>
            <img id="img4" src={img4} alt=""/>
            <img src={tri1} alt="" class="absolute left-[240px] top-[-70px] z-10"/>
            <img src={tri2} alt="" class="absolute right-[300px] bottom-[389px] z-10"/>
        </div>
    </div>

</div>
  )
}

export default Header