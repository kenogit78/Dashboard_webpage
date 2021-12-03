import React from 'react'
import './Sidebar.css'
import { TiArrowMoveOutline } from "react-icons/ti";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { GiBoxUnpacking } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { GiDisintegrate } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";


const display = [
   {
       icon: <AiFillDashboard />,
       name: 'Dashboard'
   },
   {
       icon: <IoMdContact />,
       name: 'Profile'
   },
   {
       icon: <GiBoxUnpacking />,
       name: 'Utilities'
   },
   {
       icon: <AiTwotoneSetting />,
       name: 'Settings'
   },
   {
       icon: <MdEmail />,
       name: 'Messages'
   },
   {
       icon: <DiGoogleAnalytics />,
       name: 'Analytics'
   },
   {
       icon: <GiDisintegrate />,
       name: 'Integration'
   },
]


export default function Sidebar() {
    return (
        <div className='sidebar'>
            
            <div className='topbar'>
                <div className='top'>
                <TiArrowMoveOutline fontSize='2.5em' />
                <p> Virtual Dashboard</p>
                </div>

                <div className='items'>
                  {
                      display && display.map(data => (
                          <div className='items-data'>
                           {data.icon}
                              <p> {data.name}</p>

                          </div>
                      ))
                  }
                </div>
                
            </div>

            <div className='bottom'>

                <div className='bottom-icons'>
                    <div>
                    <MdHistory fontSize='2em' />
                    </div>
                    <div>
                    <BiDotsVerticalRounded fontSize='1em' />
                    </div>

                    
                </div>
                
                <h3> History available  </h3>

                <p>Check your weekly transaction reports</p>

                
            </div>


           


        </div>
    )
}
