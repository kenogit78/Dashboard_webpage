import React from 'react'
import './Search.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiTimerFill } from 'react-icons/ri'
import { BsAlignMiddle } from 'react-icons/bs'
import { BiTimer } from 'react-icons/bi'
import { MdOutlineAvTimer } from 'react-icons/md'
import { TiArrowMoveOutline } from "react-icons/ti";
import { HiMenuAlt3 } from 'react-icons/hi'


export default function Search() {

    const stat = [
        {
            icon: <RiTimerFill fontSize='2em' color='#774DFF' marginRight='2em' />,
            header: 'Sessions',
            figure: '24k',
            percent: '+33.45%'
        },
        {
            icon: <BsAlignMiddle fontSize='2em' color='#774DFF' />,
            header: 'Avg Sessions',
            figure: '00:18',
            percent: '-112.45%'
        },
        {
            icon: <BiTimer fontSize='2em' color='#774DFF' />,
            header: 'Bounce Rate',
            figure: '$2400',
            percent: '+62.10%'
        },
        {
            icon: <MdOutlineAvTimer fontSize='2em' color='#774DFF' />,
            header: 'Avg. Watch time',
            figure: '45.42',
            percent: '+4.46%'
        },
    ]
    return (

        <div>
            <div className='real-top'>
            <div className='top'>
                <TiArrowMoveOutline fontSize='2.5em' color='#774DFF' />
                {/* <p> Virtual Dashboard</p> */}
                </div>

            <div className='search'>
                <div className='icon'>
              <AiOutlineSearch fontSize='1.5em' color='#774DFF' />
              </div>
              <div>
                <input type="text" 
                     placeholder='Search'
                 />
                 </div>
            </div>

            <div className='top-menu' >
                
                <HiMenuAlt3 fontSize='1.5em' color='#774DFF'/>
            </div>

            </div>

        <div className='stats'>

                   { 
                   stat && stat.map(status => (
                    <div className='stat-content' >
                        {status.icon}
                        
                        <div className='stat-text'>
                        <p> {status.header}</p>
                        <h3>{status.figure}</h3>
                        <p><strong> {status.percent}</strong></p>
                        </div>
                        </div>
                    ))
                    }
        </div>
        
        </div>
    )
}
