import React from 'react'
import '../.././assets/style.css'
import vector2 from '../.././assets/img/Vector2.svg'
import  Customer from '../.././assets/img/Custom-care.svg'
import  Triangle1 from '../.././assets/img/Triagle-Top.svg'
import Triangle2 from '../.././assets/img/Triangle-down.svg'

const ReachOut = () => {
  return (
    <div className='px-[100px]  flex gap-[50px] py-[50px] h-[600px]'>
      <div className='relative flex flex-col justify-center w-1/2 gap-[30px]'>
 <h2 className='font-[700] text-[36px] leading-[49px]'>
    Reach Out To Us
    </h2>
    <p className=' font-[400] text-[20px] leading-[30px] text-[#525252]'>
    At SnaypseLearn, we've got your back! Our top-notch customer care team is here 
    to make your experience with our products and services a breeze.
     Whether you have a tech issue or a simple question, we're just a message or call away.
      Expect friendly support, tailored solutions, 
    and a commitment to your satisfaction. Reach out today and let's tackle it together!
    </p>
    <div className='flex gap-[10px] rounded-[200px] justify-between w-[264px]  pl-[24px] 
    border-[1px] border-[#000]'>
      <h2 className=' self-center font-[600] text-[20px] leading-[24px]'>Talk to someone</h2>
      <a href="#">
      <img className='py-[10px] px-[8px] rounded-[1000px] bg-[#1BCBD8]' 
      src={vector2} alt="" />
      </a>
          </div>
          <img className='absolute top-[40px] right-[250px]' src={Triangle1} alt="" width='90px'/>
          <img className='absolute bottom-[0]' src={Triangle2} alt="" width='90px' />
    </div>
    <div className='w-1/2 ' >
    <img src={Customer} alt="" />
     
    </div>
    
    </div>
  )
}

export default ReachOut