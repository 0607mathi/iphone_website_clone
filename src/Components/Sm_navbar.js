import React from 'react'
import Apple_logo from '../asserts/images/navbar-apple-logo.png'
import { AiOutlineSearch,AiOutlineShopping,AiOutlineMenu} from "react-icons/ai";
const Sm_navbar = () => {
  return (
    <div className='flex items-center py-1 mx-1 mr-4'>
        <a href="#"></a><img src={Apple_logo} className='w-12' alt="" />
        <ul className='flex gap-7 ml-auto'>
            <li><a href="#" ><AiOutlineSearch size={22}/></a></li>
            <li><a href="#"><AiOutlineShopping size={22}/></a></li>
            <li><button><AiOutlineMenu size={22}/></button></li>
        </ul>
    </div>
  )
}

export default Sm_navbar