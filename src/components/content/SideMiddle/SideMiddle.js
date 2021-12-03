import React from 'react'
import './SideMiddle.css'
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function SideMiddle() {
    return (
        <div className='side-middle'>

            <div className='analytics'>
                <div className='top'>
                    <h3> Analytics </h3>
                    <BiDotsVerticalRounded fontSize='1.5em' />
                </div>

                <div className='analytics-chart'>
                    <div className='box1'>
                        <h3> 23 </h3>
                        <p> Mar </p>
                    </div>
                    <div className='box2'>
                         <h3> 30 </h3>
                        <p> Aug </p>
                    </div>
                    <div className='box3'>
                        <h3> 25 </h3>
                         <p> Sep </p>
                    </div>

                </div>

                <div className='date'>
                    <div className='days'>
                        <p> Mo</p>
                        <h3> 12</h3>
                    </div>

                    <div className='days' id='active'>
                        <p> Tu</p>
                        <h3> 13</h3>
                    </div>

                    <div className='days'>
                        <p> We</p>
                        <h3> 14</h3>
                    </div>

                    <div className='days'>
                        <p> Th</p>
                        <h3> 15</h3>
                    </div>

                    <div className='days'>
                        <p> Fr</p>
                        <h3> 16</h3>
                    </div>

                    <div className='days'>
                        <p> Sa</p>
                        <h3> 17</h3>
                    </div>

                    <div className='days'>
                        <p> Su</p>
                        <h3> 18</h3>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
