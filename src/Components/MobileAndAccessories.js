import React from 'react'
import '../App.css'
import Mobile_Outline from '../asserts/images/MobileOutline.png'
import Single_Mobile from '../asserts/images/SingleMobile.png'
import Old_iPhone from '../asserts/images/OldiPhone.png'
import Compare from '../asserts/images/Compare.png'
import Airpods from '../asserts/images/Airpods.png'
import Airtag from '../asserts/images/Airtag.png'
import Cases from '../asserts/images/Cases.png'
import iOS from '../asserts/images/iOS.png'
import Shop_iPhone from '../asserts/images/Shop_iPhone.png'
const MobileAndAccessories = () => {
  return (
    <div className='flex justify-center items-center gap-10 py-10 bg-white'>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer'>
        <img src={Mobile_Outline} alt="iphone 15 Pro" className='w-10 h-12' />
        <p className='mt-2'>iphone 15 Pro</p>
       </div>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer'>
        <img src={Mobile_Outline} alt="iphone 15" className='w-10 h-12' />
        <p className='mt-2'>iphone 15 </p>
       </div>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer'>
        <img src={Mobile_Outline} alt="iphone 14" className='w-10 h-12' />
        <p className='mt-2'>iphone 14</p>
       </div>
       
       <div className='flex flex-col justify-center items-center iphones cursor-pointer'>
        <img src={Single_Mobile} alt="iphone 13" className='w-6 h-12' />
        <p className='mt-2'>iphone 13</p>
       </div>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer'>
        <img src={Old_iPhone} alt="iphone SE" className='w-6 h-11' />
        <p className='mt-2'>iphone SE</p>
       </div>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer self-end'>
        <img src={Compare} alt="Compare" className='w-10 h-10' />
        <p className='mt-2'>iphone SE</p>
       </div>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer self-end'>
        <img src={Airpods} alt="Airpods" className='w-8 h-8' />
        <p className='mt-2'>Airpods </p>
       </div>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer self-end'>
        <img src={Airtag} alt="Airtag" className='w-7 h-8' />
        <p className='mt-2'>AirTag </p>
       </div>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer'>
        <img src={Cases} alt="Accessories" className='w-10 h-12' />
        <p className='mt-2'>Accessories</p>
       </div>

       <div className='flex flex-col justify-center items-center iphones cursor-pointer self-end'>
        <img src={iOS} alt="iOS 17" className='w-10 h-10' />
        <p className='mt-2'>iOS 17</p>
       </div>

       <div className='flex flex-col justify-center items-center iphones'>
        <img src={Shop_iPhone} alt="Shop iphone" className='w-15 h-12' />
        <p className='mt-2'>Shop iphone</p>
       </div>
    </div>
  )
}

export default MobileAndAccessories