import React from 'react'
import './Graph.css'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function Graph() {

    const data = {
        
            labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur' ],

            datasets: [
                {
                label: 'Overall performance',
                data:[ 2019, 2020, 2021, 2020, 2019, 2018, 2019, 2020, 2021, 2020, 2015],
            
                borderRadius: 20,
               
                backgroundColor: '#774DFF',
                barThickness: 18
             

            },
        ],
    };

    const options = {
        devicePixelRatio: 4.5,
            scales:{
                x:
                    {
                        gridLines:{
                            color: 'red'
                        },
                     
                    }
                ,
                y:
                    {
                        beginAtZero:false
                    }
                
            },
            plugins: {

            }
        };
    

    return (
        <div className='graph'>

            <div className='graph-header'>
                <div className='text'>
                    <h3> Profile Growth </h3>
                    <p> Overall Information</p>
                </div>

                <div className='toggle'>
                    <p> Months </p>
                    <div className='active-toggle'>
                        <p> Years </p>
                    </div>
                </div>

            </div>

            <div className='main-graph'>
            

                <Bar data={data} options={options}   />

            
            </div>
        </div>
    )
}
