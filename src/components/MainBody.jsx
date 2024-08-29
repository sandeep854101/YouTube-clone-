import React from 'react'

const MainBody = ({ MainBoxData }) => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 px-4 py-2">
                {
                    MainBoxData.map((item) => (
                        <div key={item.id}>
                            <a href={item.link}>
                                <img src={item.image} className='rounded' alt="" />
                            </a>
                            <div className='flex gap-x-2 py-2 items-center'>
                                <div>
                                    <img src={item.icon} className='w-[3rem] rounded-full' alt="" />
                                </div>
                                <div >
                                <p className='font-[500]'>{item.title}</p>
                                <p className='text-gray-600'>{item.channelName}</p>
                                <p className='text-gray-600'>{item.view}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MainBody
