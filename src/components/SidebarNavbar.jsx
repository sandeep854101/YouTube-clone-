import React from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import logo from '../assets/logo.jpg'
const SidebarNavbar = () => {
  return (
    <div className='flex justify-between items-center px-5  sticky top-0 bg-white'>
      <div>
        <MdOutlineMenu className='text-[1.7rem] cursor-pointer'/>
      </div>
      <div>
        <img src={logo} className='w-[7rem] cursor-pointer  ' alt="" />
      </div>
    </div>
  )
}

export default SidebarNavbar
