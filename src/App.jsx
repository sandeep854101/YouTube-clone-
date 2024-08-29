import React from 'react'
import { MainBodyData } from './components/AllData'
import SidebarNavbar from './components/SidebarNavbar'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'

const App = () => {
  return (
    <div className='flex'>
      <div className='w-[20%] overflow-y-scroll scrollbar-hide  h-[100vh]'>
        <SidebarNavbar/>
        <SideBar/>
      </div>
      <div className="w-full h-[100vh] overflow-y-auto scrollbar-hide">
        <Navbar/>
        <MainBody MainBoxData={MainBodyData}/>
      </div>
    </div>
    
  )
}

export default App
