import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";
import { useQuery } from "react-query";
import Chart from './Graph';
import { Section} from './comman/Style'

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";
const data = [
  {
    name: "Time A",
    uv: 10000,
    V: 2400,
    amt: 2400
  },
  {
    name: "Time B",
    uv: 3000,
    V: 1398,
    amt: 2210
  },
  {
    name: "Time C",
    uv: 2000,
    V: 9800,
    amt: 2290
  },
  {
    name: "Time D",
    uv: 2780,
    V: 3908,
    amt: 2000
  },
  {
    name: "Time E",
    uv: 1890,
    V: 4800,
    amt: 2181
  },
  {
    name: "Time F",
    uv: 2390,
    V: 3800,
    amt: 2500
  },
  {
    name: "Time G",
    uv: 3490,
    V: 4300,
    amt: 2100
  }
];
const fetchNews = async () => {
    const res = await fetch("/api/addNetwork");
    return res.json();
  };
function Dash() {
    const { data, status  , isFetching } = useQuery("news", fetchNews ,
    {
       
        refetchInterval: 1000,
      }
    
    );
    console.log(data)
    return (
        <>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
        
     <p></p>
        
        }
        {status === "success" && (
        
      <div  className="name"  style={{direction:"flex",   justifyContent:"center", alignItems:"center" , width:"100%"}} >
      <div  style={{direction:"flex", justifyContent:"center", alignItems:"center" , width:"90%"}} className="App">
            {data.relayNetwork.map(  number =>  {
  

 
                return (
            <>
           <h1  style={{marginTop:"2rem" ,}} >{number.relayNetworkName}</h1> 
            {number.relayList[number.relayList.length - 1].reading_time}
    <ReactSpeedometer
    maxValue={16}
    value={number.relayList[number.relayList.length - 1].voltage}
    valueFormat={'d'}
    customSegmentStops={[ 0 ,10 , 12 ,  14 ,  16]}
    style={{marginTop:"1rem" ,}}
    textColor={"red"}
  />
 <h1>{number.relayNetworkName}</h1> 

  

<Chart data={number.relayList} />

</>


)
})}
    
        </div>


        </div>
       
  
       )}
      

   
      

    
    
    </>
    )
}

export default Dash


