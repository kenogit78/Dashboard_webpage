import React from 'react'
import './CardStats.css'
import { BsThreeDots } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'
import { MdOutlineAccessTime } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { BsPlayBtnFill } from 'react-icons/bs'

export default function CardStats() {

    const stat = [
        {
            icon: <GiClick fontSize='1.5em' color='#fff' />,
            header: 'New Subscribers',
            figure: '5,095',
            percent: '+33.45%',
        },
        {
            icon: <MdOutlineAccessTime fontSize='1.5em' color='#fff' />,
            header: 'Streams',
            figure: '47,095',
            percent: '-112.45%',
        },
        {
            icon: <IoIosPeople fontSize='1.5em' color='#fff' />,
            header: 'Engagement',
            figure: '25.81',
            percent: '+62.10%',
        },
        {
            icon: <BsPlayBtnFill fontSize='1.5em' color='#fff' />,
            header: 'Avg. Watch time',
            figure: '45.42',
            percent: '+4.46%'
        },
    ]
    return (
        <div className='card-stats'>

            <div className='stats'>

            { 
            stat && stat.map(status => (
            <div className='stat-content'>
                <div className='icon'>
                  {status.icon}
                </div>
                
                <div className='stat-text'>
                <p> {status.header}</p>
                <h3>{status.figure}</h3>
                <p><strong> {status.percent}</strong></p>
                </div>
                </div>
            ))
            }
            </div>

            <div className='details'>
            
            <div className='detail-content'>
                <div className='deal'>
                <p> Profit list</p> 
                <p> Growth Ratio</p> 
                <p> Earnings </p> 
                </div >

                <div className='deal'>
                <p> David</p> 
                <p> Mike</p> 
                <p> Ghulam </p> 
                </div >

                <div className='deal'>
                <p> CEO</p> 
                <p> CTO</p> 
                <p> Manager </p> 
                </div >

                <div className='deal'>
                <p> 02-02-2021</p> 
                <p> 02-03-2021</p> 
                <p> 02-04-2021</p>  
                </div >

                <div className='deal' id='state'>
                <p> Pending </p> 
                <p> Done</p> 
                <p> Testing</p>  
                </div >

                <div className='deal state'>
                <p> <BsThreeDots /> </p> 
                <p> <BsThreeDots /> </p> 
                <p> <BsThreeDots /> </p> 
                </div >

                </div>
          

            </div>
            
        </div>
    )
}
