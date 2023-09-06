import React from 'react'
import '../assets/style.css'

const PasswordRecovery = () => {
  return (
 <div className='flex flex-col gap-[40px]  w-[432px] h-[518px] mx-auto mt-[100px] '>
  <div>
    <div className='flex w-[100%] bg-white border-[0.4px]  border-[#525252] rounded-[12px] '>
       {/* <div className=' 
     '> */}
     <a href="#" className='bg-white  flex w-[50%] justify-center rounded-s-[12px] 
       py-[9px] text-[16px] text-[#525252] font-[Nunito]  
     font-[800] leading-[22px] border-e-[0.4px] border-e-[#525252]
      hover:bg-[#1BCBD8] hover:text-white ' >
      Sign in
      </a>
   {/* </div> */}
     {/* <div className='flex bg-white w-[50%] border-[0.4px] border-[#525252]
      justify-center rounded-e-[12px] '> */}
     <a href="#" className=' bg-white flex w-[50%] justify-center rounded-e-[12px]    text-[16px] text-[#525252] font-[Nunito]  
     font-[800] leading-[22px]  py-[9px] hover:bg-[#1BCBD8] hover:text-white'>
      Sign up</a>
      {/* </div> */}
    </div>
    </div>
     <div className='flex flex-col px-[16px]'>
   <h2 className='text-[28px] leading-[38px] font-[600] text-center py-[35px]'> 
   Forgot Password 
   </h2>
     <div className='form w-[100%] '>
      <form action=" " className='flex flex-col w-[100%] gap-[20px]'>
        <input type="text" placeholder='Please Enter your Email Address'
        className ='  w-[100%] p-[16px]  rounded-[16px] border-[1px]  
        border-[#525252] outline-none focus:border-[#1BCBD8]' />
         <a className='cursor-pointer  w-[100%] py-[16px] rounded-[16px] bg-[#1BCBD8]
      hover:shadow-md  hover:text-white  text-center font-[600] leading-[22px]  text-[16px]'>Registration
         </a>
        
         <p className='text-center text-[#525252] font-[500] text-[16px] leading-[22px]'>
          New to SynapseLearn 
          <a className= 'ml-[10px]  text-[#4771B0] underline' href="#">Sign up</a></p>
     
      
      </form>
     </div>
     </div>
    </div>
  )
}

export default PasswordRecovery