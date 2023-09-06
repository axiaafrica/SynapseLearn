import React from 'react'
import '../assets/style.css'

const PasswordReset = () => {
  return (
    <div className='flex flex-col gap-[40px]  w-[432px] h-[518px] mx-auto mt-[100px]'>
  <div className='flex flex-col px-[16px]'>
   <h2 className='text-[28px] leading-[38px] font-[600] text-center py-[35px]'> 
   Reset Password 
   </h2>
     <div className='form w-[100%] '>
      <form action=" " className='flex flex-col w-[100%] gap-[20px]'>
        <input type="Password" placeholder=' Enter Your Password'
        className ='  w-[100%] p-[16px]  rounded-[16px] border-[1px]  
        border-[#525252] outline-none focus:border-[#1BCBD8]' />
        <input type="Password" placeholder=' Re-enter Enter Your Password'
        className ='  w-[100%] p-[16px]  rounded-[16px] border-[1px]  
        border-[#525252] outline-none focus:border-[#1BCBD8]' />
         <a className='cursor-pointer  w-[100%] py-[16px] rounded-[16px] bg-[#1BCBD8]
      hover:shadow-md  hover:text-white  text-center font-[600] leading-[22px]  text-[16px]'
      >Reset password
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

export default PasswordReset