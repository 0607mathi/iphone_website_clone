import React from 'react'
import { useState,useEffect } from 'react';
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Apple_logo from '../asserts/images/navbar-apple-logo.png'
import { AiOutlineSearch,AiOutlineShopping,AiOutlineMenu} from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
const Sm_navbar = () => {
  const[toggleMenu, setToggleMenu]=useState(false);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className='flex items-center py-1 pt-2 mx-1 lg:hidden w-full fixed top-0 bg-white'>
      { !toggleMenu &&  <a href="#"><img src={Apple_logo} className='w-14' alt="" /></a> }
        <ul className='flex gap-7 ml-auto pr-3'>
        { !toggleMenu &&  <li><a href="#" ><AiOutlineSearch size={20}/></a></li>}
           { !toggleMenu &&  <li><a href="#"><AiOutlineShopping size={20}/></a></li>}
            <li><button onClick={()=> setToggleMenu(!toggleMenu)}><AiOutlineMenu size={20}/></button></li>
        </ul>
      </div>
      { toggleMenu && <div className="dropdown  w-full bg-white mt-9 block lg:hidden h-screen" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300">
        <ul className='mx-12 font-bold mt-1'>
                <li><a href="#">Store</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">Mac</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">iPad</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">iPhone</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">Watch</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">Airpods</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">TV & Home</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">Entertainment</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">Accessories</a><FaAngleRight className='hidden FaAngleRight' /></li>
                <li><a href="#">Support</a><FaAngleRight className='hidden FaAngleRight' /></li>
        </ul>
      </div>}
    </div>
  )
}

export default Sm_navbar