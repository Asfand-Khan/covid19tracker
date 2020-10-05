import React,{useEffect, useState} from 'react'
import axios from "axios";
import {Line,Bar} from 'react-chartjs-2';

export const Chart = () => {
    const [chartData,setChartdata] = useState();
    useEffect(()=>{
        async function fetchDailyData(){
            const response = await axios.get('https://covid-19-data.p.rapidapi.com/help/');
            console.log(response)
        }
        fetchDailyData()
    },[])
    
//    const lineChart=(
//        !chartData?null:<Line
//            data={{
//                labels: new Date(chartData.lastUpdate).toDateString(),
//                datasets:[{
//                    data:chartData.confirmed.value,
//                    label:"Infected",
//                    borderColor:'#3333ff',
//                    fill:true
//                },
//                {
//                    data:chartData.recovered.value,
//                    label:"Recovered",
//                    borderColor:'blue',
//                    backgroundColor:'rgba(0,0,255,0.5)',
//                    fill:true
//                }]
//            }}
//        />
//    )
    return (
        <div>
            
        </div>
    )
}
