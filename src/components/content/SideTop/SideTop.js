import React from 'react'
import './SideTop.css'
import Avatar from '../../../assets/images/man.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function SideTop() {
    return (
        <div className='side-top'>
            <div className='top'>
                <div className='image'>
                <img src={Avatar} alt={Avatar} />
                </div>
                <div>
                <h3> Mike Lock </h3>
                <p> UI Designer</p>
                </div>
                <HiMenuAlt3 fontSize='1.5em'/>
            </div>

            <div className='side-top-cards'>
                <div className='cards' >
                    <div className='text'>
                        <p> Open Projects</p>
                        <h3> 500 </h3>
                    </div>

                    <div className='icon'>
                        <MdKeyboardArrowRight color='#fff' fontSize='1.5em' />
                    </div>
                </div>

                <div className='cards' >
                    <div className='text'>
                    <p> Successfully completed</p>
                        <h3> 3502 </h3>
                    </div>

                    <div className='icon'>
                        <MdKeyboardArrowRight color='#fff' fontSize='1.5em' />
                    </div>

                </div>

                <div className='cards' >
                    <div className='text'>
                        <p> Earned this month </p>
                        <h3> $523001 </h3>
                    </div>

                    <div className='icon'>
                        <MdKeyboardArrowRight color='#fff' fontSize='1.5em' />
                    </div>

                </div>

           </div> 
        </div>
    )
}
