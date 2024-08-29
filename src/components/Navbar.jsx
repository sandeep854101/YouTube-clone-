import React from 'react'
import { FaMicrophone, FaSearch, FaUserAlt } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { RiVideoUploadLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-[3rem] py-[1rem] sticky top-0 bg-white'>
            <div className=' pl-[10rem] flex items-center gap-4  '>
                <div  className='flex justify-between border border-gray-300 rounded-full px-2 py-1 items-center  w-[400px]' >
                    <input type="text"
                    className='border-none outline-none bg-transparent px-2'
                        placeholder='Search...' />
                    <FaSearch />
                </div>
                <div className='flex items-center justify-center cursor-pointer border border-gray-400 h-[2rem] w-[2rem] rounded-full'>

                    <FaMicrophone  />
                </div>
            </div>
            <div className='flex gap-6 text-[1.5rem]'>
                <div>
                    <RiVideoUploadLine />
                </div>
                <div>
                    <IoIosNotifications />
                </div>
                <div>
                    <FaUserAlt />
                </div>
            </div>
        </div>
    )
}

export default Navbar
