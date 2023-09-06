import React from 'react'
import '../assets/style.css'

const Registration = () => {
  return (
    <div className='flex flex-col justify-between h-[690px] w-[800px] mx-[auto] my-[20px]'>
      {/* form */}
     <form action="" className=' flex flex-col gap-[10px]'>
      {/* form1 */}
        <div className='row-1 flex flex-col gap-[10px]'>
       <label htmlFor="Name" className='text-[16px] font-[500] leading-[22px]'>
        First Name
       </label>
       <input type="name" placeholder='Please enter your name'
        className='h-[51px] pl-[10px] rounded-[16px] border-[1px] 
        border-[#525252] outline-none focus:border-[#1BCBD8]'/>
     </div>
     {/* form2 */}
     <div className='row-1 flex flex-col gap-[10px]'>
       <label htmlFor="Name" className='text-[16px] font-[500] leading-[22px]'>
        Last Name
       </label>
       <input type="name" placeholder='Please enter your last name'
        className='h-[51px] pl-[10px] rounded-[16px] border-[1px] 
        border-[#525252] outline-none focus:border-[#1BCBD8]'/>
     </div>
     {/* form3 */}
     <div className='row-1 flex flex-col gap-[10px]'>
       <label htmlFor="Name" className='text-[16px] font-[500] leading-[22px]'>
        UserName
       </label>
       <input type="name" placeholder='Pick a Username'
        className='h-[51px] pl-[10px] rounded-[16px] border-[1px] 
        border-[#525252] outline-none focus:border-[#1BCBD8]'/>
     </div>
     {/* form4 */}
     <div className='row-1 flex flex-col gap-[10px]'>
       <label htmlFor="password" className='text-[16px] font-[500] leading-[22px]'>
        Password
       </label>
       <input type='password' placeholder='Insert your Password'
       className='h-[51px] px-[10px] rounded-[16px] border-[1px] 
       border-[#525252] outline-none focus:border-[#1BCBD8]'/>
      
     </div>
     {/* form5 */}
     <div className='row-1 flex flex-col gap-[10px] '>
       <label htmlFor="Name" className='text-[16px] font-[500] leading-[22px]'>
        Interest
       </label>
       <input type="name" placeholder='Type or pick an interest below'
        className='h-[51px] pl-[10px] rounded-[16px] border-[1px] 
        border-[#525252] outline-none focus:border-[#1BCBD8]'/>
     </div>
     {/* form6 interests */}
     <div className= 'w-[604px]  gap-[10px] flex  flex-wrap mb-[40px]'>
      {/* course1 */}
   <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
    Design
    </h2>
    {/* course2 */}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
    User experience
    </h2>
    {/* course3*/}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
    Gaming
    </h2>
    {/* course4*/}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
    Front-end
    </h2>
    {/* course5 */}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
    Back-end
    </h2>
    {/* course6 */}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
     Product Design
    </h2>
    {/* course7 */}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
    Drawing
    </h2>
    {/* course8 */}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
    Business Analysis
    </h2>
    {/* course9 */}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#1BCBD8] hover:text-white'>
    Data-base Management
    </h2>
    {/* course10 */}
    <h2 className='font-[500] text-[14px] leading-[19.1px] py-[16px] px-[10px]
    text-[#52525299]  opacity-[60%] text-left border-[1px]
    border-[#1BCBD8] rounded-[16px] cursor-pointer hover:bg-[#50e2ec] hover:text-white'>
     Product Management
    </h2>
    
     </div>
     <div className='flex justify-center'>

     <a className=' w-[400px] py-[16px] rounded-full bg-[#1BCBD8]
      hover:shadow-md hover:text-white  text-center font-[600] leading-[22px] text-[16px]'>Registration
         </a>
      </div>
     </form>
      
 
      </div>

    
  )
}

export default Registration