import React from 'react'
import './SideBottom.css'
import { MdOutlineCancelPresentation } from "react-icons/md";

export default function SideBottom() {
    return (
        <div className='side-bottom'>

            <div className='audit'>
                <h3>Audit</h3>
                <div className='date'>
                    <p> Feb1 to Mar5</p>
                    <MdOutlineCancelPresentation />
                </div>

            </div>

            <div className="container">
                <div className='cardbox'>
                <div className="card">
                    <div className="box">

                  
                    <div className="percent">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                       
                            <div className="num">
                            <h2>75%</h2>
                            <p> Reviews</p>
                            </div>
                    </div> 

                    
                    </div>

                    


                </div>
                </div >

                <div className='bottom'>

                  
                        <h2 className="text">38%</h2>
                        <p>Privilege Access</p>

                        <div className='progress'>
                        <span className="progress-bar" ></span>
                        </div>

                        </div>
                </div>
            
        </div>
       


    )
}
