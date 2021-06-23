

import React from 'react'
import moment from 'moment'
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

function Graph({data}) {

    // let today     = "2021-05-27 15:16";
    // console.log(moment( today).format('MM/DD/YYYY'));
    const today = moment();
   
const set =  today.format('MM/DD/YYYY')
const set2  =  data.filter(sets => (moment(sets.reading_time).format('MM/DD/YYYY')) === set ) 

return (
       
             <div     style={{display:'flex' , justifyContent:"center", width:"100%"}} >
     
     
        <LineChart

      
          width={1000}
          height={400}
          data={set2}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray=" 4" />
          <XAxis dataKey="voltage" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="voltage" stroke="#8884d8" />

        </LineChart>
      
      
      </div>


        
    )
}

export default Graph
