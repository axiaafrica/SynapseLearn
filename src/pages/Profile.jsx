import React from 'react'
import '../assets/style.css'
import profileArrow from '.././assets/img/Arrows Button Right.svg'
import profilePicture from '.././assets/img/profile-pic.svg'

const Profile = () => {
  return (
     <div class='flex  flex-col font-[Nunito] pl-[272px] pr-[170px] pt-[20px]'>
  <div className='pl-[15px] bg-blue-200'>
        {/* content for knowinng you are in profile page */}
    <div className='flex gap-[10px] mb-[40px]'>
       <h2 className='font-[400] text-[16px] text-[#857E7E] 
       leading-[24px] tracking-[0.5px]'>
        Dashboard
     </h2>
   <img src={profileArrow} alt="" />
   <h2 className=' font-[700] text-[16px] leading-[24px] tracking-[0.5px]'>
    Profile
   </h2>
    </div>
    {/* profile image */}
     <div className='flex flex-col items-center gap-[15px] mb-[60px]'>
     <img className='hover:scale-[2]' src={profilePicture} alt="" width= '100px' height='100px' />
     <p className='font-[400] text-[20px] text-[#AAB1B2] leading-[30px]'>
      Peace Edward</p>
     </div>
     {/* form */}
     <form action="">
      <div className='flex'>
        <div className='flex flex-col'>
        <label htmlFor="name">First Name</label>
    <input type='text' placeholder='First'/>
    </div>
      </div>
     </form>
</div>
</div>
  )
}

export default Profile