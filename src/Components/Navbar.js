import React from 'react'
import '../App.css'
import Apple_logo from '../asserts/images/navbar-apple-logo.png'
import { AiOutlineSearch,AiOutlineShopping } from "react-icons/ai";
import Sm_navbar from './Sm_navbar';
const Navbar = () => {
  return (
    <div>
         <div className='hidden md:block'>
        <ul className='Navbar flex justify-center items-center gap-10 my-1'>
        <li><a href="#"></a><img src={Apple_logo} className='w-12' alt="" /></li>
        <li><a href="#" className=''>Store</a></li>
        <li><a href="#">Mac</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">Watch</a></li>
        <li><a href="#">Airpods</a></li>
        <li><a href="#">TV & Home</a></li>
        <li><a href="#">Entertainment</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#" ><AiOutlineSearch className='text-xl'/></a></li>
        <li><a href="#"><AiOutlineShopping className='text-xl'/></a></li>
        <li><a href="#"></a></li>
    </ul></div>  
         <Sm_navbar />
    </div>
  )
}

export default Navbar


    