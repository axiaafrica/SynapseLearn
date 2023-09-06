import React from 'react'
import '../.././assets/style.css'
 import Track1 from'../.././assets/img/Course1.svg'
 import Track2 from '../.././assets/img/Course2.svg'
 import Track3  from '../.././assets/img/Course3.svg'
 import alarm from '../.././assets/img/mdi_alarm-check.svg'
 import star from '../.././assets/img/Star 5.svg'
import vector from '../.././assets/img/Vector1.svg'



function Explore() {
  return (
    // container
    <div className=' explore px-[120px]  flex flex-col gap-[30px] mb-[100px] '>
      {/* explore our courses */}
      <div className=' flex justify-between'>
        <h2 className='text-[24px] text-[#000000] font-[700] leading-[32.74px]'>
          Explore our courses
        </h2>
        <div className='  flex gap-[5px]'>
          {/* carousels left*/}
           <svg className='arrow-left'
            width="30" height="30" viewBox="0 0 36 36"
             xmlns="http://www.w3.org/2000/svg">
             <g fill="black">
     <path d="M16.2 18L22.05 23.85C22.325 24.125 22.4625 24.475 22.4625 24.9C22.4625 25.325 22.325 25.675 22.05 25.95C21.775 26.225 21.425 26.3625 21 26.3625C20.575 26.3625 20.225 26.225 19.95 25.95L13.05 19.05C12.9 18.9 12.794 18.7375 12.732 18.5625C12.67 18.3875 12.6385 18.2 12.6375 18C12.6375 17.8 12.669 17.6125 12.732 17.4375C12.795 17.2625 12.901 17.1 13.05 16.95L19.95 10.05C20.225 9.77501 20.575 9.63751 21 9.63751C21.425 9.63751 21.775 9.77501 22.05 10.05C22.325 10.325 22.4625 10.675 22.4625 11.1C22.4625 11.525 22.325 11.875 22.05 12.15L16.2 18Z" fill="white"/>
     </g>
     </svg>
     {/* carousel right */}
     <svg className='arrow-right' width="30" height="30" viewBox="0 0 36 36" 
     fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M18.9 18L13.05 12.15C12.775 11.875 12.6375 11.525 12.6375 11.1C12.6375 10.675 12.775 10.325 13.05 10.05C13.325 9.77501 13.675 9.63751 14.1 9.63751C14.525 9.63751 14.875 9.77501 15.15 10.05L22.05 16.95C22.2 17.1 22.3065 17.2625 22.3695 17.4375C22.4325 17.6125 22.4635 17.8 22.4625 18C22.4625 18.2 22.431 18.3875 22.368 18.5625C22.305 18.7375 22.199 18.9 22.05 19.05L15.15 25.95C14.875 26.225 14.525 26.3625 14.1 26.3625C13.675 26.3625 13.325 26.225 13.05 25.95C12.775 25.675 12.6375 25.325 12.6375 24.9C12.6375 24.475 12.775 24.125 13.05 23.85L18.9 18Z" fill="white"/>
     </svg> 
         </div>
      </div>
      {/* section2// image carousel */}
      <div className='flex gap-[40px] overflow-x-scroll'>
        {/* course1 */}
        <div className='w-[320px] shrink-0'>
       <img className='w-[100%] ' src={Track1} alt=""/> 
       {/* image-text(course1) */}
       <div className='flex flex-col h-[200px] justify-between border-x-[1px] border-b-[1px]
         rounded-b-[16px] border-[#1498A2]
          px-[15px] py-[18px]'>
       <h2 className='font-[700] leading-[33px] text-[24px]'>
        Graphics designs

       </h2>
       {/* time */}
       <div className='flex'>
       <img src={alarm} alt="" />
       <h2 className='font-[700] text-[10px] leading-[14px] opacity-[60%]'>
       08 hr 21 mins
       </h2>
       </div>
       <p className='font-[400] text-[16px] text-[#525252] leading-[28px]'>Discover your artistic flair! 
       Dive into graphics design for fun and creativity.
         Get creative! </p>
         {/* feedback star(course1) */}
         <div className='flex justify-between'>
          <div className='flex gap-[3px]'>
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
          </div>
          <div className='flex gap-[10px] rounded-[200px] pl-[12px] border-[1px] border-[#000]'>
      <h2 className='self-center font-[700] text-[16px] leading-[22px]'>Enroll Now</h2>
      <a href="#">
      <img className='py-[10px] px-[8px] rounded-[1000px] bg-[#355584] hover:bg-blue-900' 
      src={vector} alt="" />
      </a>
          </div>
         </div>
   </div>

      </div>
      {/* course2 */}
       <div className='w-[320px] shrink-0'>
         <img className='w-[100%] shrink-0' src={Track2} alt="" /> 
         {/* image-text (course2) */}
         <div className='flex flex-col h-[200px] justify-between 
         border-x-[1px] border-b-[1px]
         rounded-b-[16px] border-[#1498A2]
          px-[15px] py-[18px]'>
      <h2 className='font-[700] leading-[33px]  text-[24px]'>
          Data Analytics
        </h2>
        {/* time */}
       <div className='flex'>
       <img src={alarm} alt="" />
       <h2 className='font-[700] text-[10px] leading-[14px] opacity-[60%]'>
       08 hr 21 mins
       </h2>
       </div>
       <p className='font-[400] text-[16px] text-[#525252] leading-[28px]'>Discover your artistic flair! 
       Dive into graphics design for fun and creativity.
         Get creative! </p>
         {/* course2 feedback stars */}
         <div className='flex justify-between'>
          <div className='flex gap-[3px]'>
          <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
          </div>
          <div className=' flex  gap-[10px] rounded-[200px] pl-[12px] border-[1px] border-[#000]'>
      <h2 className='self-center text-[16px] font-[700] leading-[22px]'>Enroll Now</h2>
<a href="#">
  <img className='py-[10px] px-[8px] rounded-full bg-[#355584]  hover:bg-blue-900' src={vector} alt="" />
  </a>
          </div>
         </div>
         </div>
      </div>


      {/* course3 */}
      <div className='w-[320px] shrink-0'>
      <img className='w-[100%] ' src={Track3} alt="" /> 
      {/* image-text3 (course3) */}
      <div className='flex flex-col h-[200px] justify-between border-x-[1px] border-b-[1px]
         rounded-b-[16px] border-[#1498A2]
       px-[15px] py-[18px]'>
        <h2 className='font-[700] leading-[33px] text-[24px]'>
      Product Design
      </h2>
      {/* time */}
      <div className='flex'>
      <img src={alarm} alt="" />
       <h2 className='font-[700] text-[10px] leading-[14px] opacity-[60%]'>
       08 hr 21 mins
       </h2>
      </div>
      <p className='font-[400] text-[#525252] text-[16px] leading-[28px]'>Discover your artistic flair! 
       Dive into graphics design for fun and creativity.
         Get creative! </p>
         {/* course3 feedback */}
         <div className='flex justify-between'>
          <div className='flex gap-[3px]'>
          <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
          </div>
          <div className=' flex gap-[10px] rounded-[200px] pl-[12px] border-[1px] border-[#000]'>
     <h2 className='self-center text-[16px] font-[700] leading-[22px]'>Enroll Now</h2>
     <a href="#">
     <img className='py-[10px] px-[8px] rounded-[1000px] bg-[#355584]  hover:bg-blue-900'
      src={vector} alt="" />
      </a>
      </div>
         </div>
         </div>
      </div>
      {/* course4 */}
      <div className='w-[320px] shrink-0'>
         <img className='w-[100%] shrink-0' src={Track2} alt="" /> 
         {/* image-text (course4) */}
         <div className='flex flex-col h-[200px] justify-between 
         border-x-[1px] border-b-[1px]
         rounded-b-[16px] border-[#1498A2]
          px-[15px] py-[18px]'>
      <h2 className='font-[700] leading-[33px]  text-[24px]'>
          Front-end Development
        </h2>
        {/* time */}
       <div className='flex'>
       <img src={alarm} alt="" />
       <h2 className='font-[700] text-[10px] leading-[14px] opacity-[60%]'>
       08 hr 21 mins
       </h2>
       </div>
       <p className='font-[400] text-[16px] text-[#525252] leading-[28px]'>Discover your artistic flair! 
       Dive into graphics design for fun and creativity.
         Get creative! </p>
         {/* course4 feedback stars */}
         <div className='flex justify-between'>
          <div className='flex gap-[3px]'>
          <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
          </div>
          <div className=' flex  gap-[10px] rounded-[200px] pl-[12px] border-[1px] border-[#000]'>
      <h2 className='self-center text-[16px] font-[700] leading-[22px]'>Enroll Now</h2>
<a href="#">
  <img className='py-[10px] px-[8px] rounded-full bg-[#355584]  hover:bg-blue-900' src={vector} alt="" />
  </a>
          </div>
         </div>
         </div>
      </div>
      {/* course5 */}
      <div className='w-[320px] shrink-0'>
       <img className='w-[100%] ' src={Track1} alt=""/> 
       {/* image-text(course5) */}
       <div className='flex flex-col h-[200px] justify-between border-x-[1px] border-b-[1px]
         rounded-b-[16px] border-[#1498A2]
          px-[15px] py-[18px]'>
       <h2 className='font-[700] leading-[33px] text-[24px]'>
        Product Manager

       </h2>
       {/* time */}
       <div className='flex'>
       <img src={alarm} alt="" />
       <h2 className='font-[700] text-[10px] leading-[14px] opacity-[60%]'>
       08 hr 21 mins
       </h2>
       </div>
       <p className='font-[400] text-[16px] text-[#525252] leading-[28px]'>Discover your artistic flair! 
       Dive into graphics design for fun and creativity.
         Get creative! </p>
         {/* feedback star(course5) */}
         <div className='flex justify-between'>
          <div className='flex gap-[3px]'>
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
          </div>
          <div className='flex gap-[10px] rounded-[200px] pl-[12px] border-[1px] border-[#000]'>
      <h2 className='self-center font-[700] text-[16px] leading-[22px]'>Enroll Now</h2>
      <a href="#">
      <img className='py-[10px] px-[8px] rounded-[1000px] bg-[#355584] hover:bg-blue-900' 
      src={vector} alt="" />
      </a>
          </div>
         </div>
   </div>
</div>

      </div>



    </div>
  )
}

export default Explore