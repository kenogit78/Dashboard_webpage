import React from 'react'
import CardStats from './CardStats/CardStats'
import './Content.css'
import Graph from './Graph/Graph'
import Search from './Search/Search'
import SideBottom from './SideBottom/SideBottom'
import SideMiddle from './SideMiddle/SideMiddle'
import SideTop from './SideTop/SideTop'


export default function Content( {toggle}) {
    return (
        <div className='content'>
            <div className='main-dashboard'>
                <Search toggle={toggle} />
                <Graph />
                <CardStats />
            
            </div>

            <div className='side-dashboard'>
                <SideTop />
                <SideMiddle />
                <SideBottom />

            </div>
        </div>
    )
}
