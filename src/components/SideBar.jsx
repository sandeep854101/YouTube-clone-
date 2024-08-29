import React from 'react'
import { FaHome, FaRegCompass, FaRegClock, FaPlayCircle, FaHistory, FaUser, FaPlay, FaDownload, FaVideo, FaHeart, FaLayerGroup } from "react-icons/fa"; 
const SideBar = () => {
   const SideBarData = [
    {
        id: 1,
        link: "#",
        title: "Home",
        icon: <FaHome />
    },
    {
        id: 2,
        link: "#",
        title: "Shorts",
        icon: <FaRegCompass />
    },
    {
        id: 3,
        link: "#",
        title: "Subscriptions",
        icon: <FaPlay />
    },
    {
        id: 4,
        link: "#",
        title: "You",
        icon: <FaUser />
    },
    {
        id: 5,
        link: "#",
        title: "Your channel",
        icon: <FaPlayCircle />
    },
    {
        id: 6,
        link: "#",
        title: "History",
        icon: <FaHistory />
    },
    {
        id: 7,
        link: "#",
        title: "Playlists",
        icon: <FaLayerGroup />
    },
    {
        id: 8,
        link: "#",
        title: "Your videos",
        icon: <FaVideo />
    },
    {
        id: 9,
        link: "#",
        title: "Watch later",
        icon: <FaRegClock />
    },
    {
        id: 10,
        link: "#",
        title: "Liked videos",
        icon: <FaHeart />
    },
    {
        id: 11,
        link: "#",
        title: "Downloads",
        icon: <FaDownload />
    },
    {
        id: 12,
        link: "#",
        title: "Your clips",
        icon: <FaVideo />
    },
    {
        id: 13,
        link: "#",
        title: "Subscriptions",
        icon: <FaPlay />
    },
  ];
  const subscriber =[
    {
      id:15,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:16,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:17,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:18,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:19,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:20,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:21,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:22,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:23,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
  {
      id:24,
      link:"#",
      title:"Gaurav Chaudhary",
      icon:"https://yt3.ggpht.com/ytc/AIdro_mcKOOioSVP0SvSGpmtbKk-2M3apSJkOZ3kDepDwxIrBPU=s68-c-k-c0x00ffffff-no-rj"
  },
];
  return (
    <div className='flex flex-col gap-3 px-4'>
      {SideBarData.map((item) => (
        <div key={item.id}>
          <div className='flex items-center gap-2 px-4 py-1 rounded hover:bg-gray-200 duration-100 cursor-pointer'>
            <a to={item.link} className='flex items-center gap-4'>
              <span className=' text-[1.2rem]'>{item.icon}</span>
              <span className='text-[1.1rem]'>{item.title}</span>
            </a>
            
          </div>
        </div>
      ))}
      {subscriber.map((item) => (
        <div key={item.id}>
          <div className='flex items-center gap-2 py-1 rounded hover:bg-gray-200 duration-100 cursor-pointer'>
            <a to={item.link} className='flex items-center gap-2'>
              <img src={item.icon} alt="" className='rounded-full h-[2rem]' />
              <span className='text-[1rem]'>{item.title}</span>
            </a>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
