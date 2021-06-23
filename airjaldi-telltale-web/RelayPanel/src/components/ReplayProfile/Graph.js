

import React , { useState }from 'react'
import { CSVLink, CSVDownload } from "react-csv";
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
    ResponsiveContainer,
    Bar
  } from "recharts";
  import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Section } from './GraphStyle'
function Graph({data , relayData}) {


  const [startDate, setStartDate] = useState(new Date().setDate( new Date().getDate()  -1));
  const [endDate, setendDate] = useState( new Date());
 
  const changeDate = (date) => {

   setStartDate(date)


  }
  const changeEndDate = (date) => {

   setendDate(date)


   }
   const start = moment(startDate).format('DD-MM-YYYY')
   const ed = moment(start, "DD-MM-YYYY").subtract(1, 'days').format('YYYY-MM-DD')
  
 

  const sd =   moment(endDate, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') 

 
const  result = data.filter(d => {var time = d.reading_time
 
         return   time <= sd &&  ed <= time
      
     });

  
      const final = result.map(t => ({ UpperVoltageThreshold: relayData[0].UpperVoltageThreshold , LowerVoltageThreshold: relayData[0].LowerVoltageThreshold , voltage: t.voltage, reading_time:t.reading_time}))


return (
       
<Section  >
             <div     style={{display:'flex' , flexDirection:'column' , justifyContent:"center", width:"100%"}} >
             <div class='picker' >
     
     <div className="label" >
     <label>Start Date</label>
     <div class="cel">
   <i class="far fa-calendar-alt"></i>
   <DatePicker   value={startDate} selected={startDate} onChange={(date) => changeDate(date)} />
</div>
   </div>
  
   <div className="label" >
     <label>End Date</label>
    <div class="cel">
    <i class="far fa-calendar-alt"></i>
   <DatePicker   value={endDate} selected={endDate} onChange={(date) => changeEndDate(date)} />
    </div>
   
   </div>
   </div>
   
   
   
       {result.length === 0
  ? (
<div  className="notFound" >
<h2>Graph not available for current date range. Please choose a different range</h2>
    </div>
  ):
  (
    <ResponsiveContainer width="100%" height={400}>
    <LineChart

      
    
    data={final.reverse()}
    margin={{ top: 5,  right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray=" 4" />
    <XAxis dataKey="reading_time" />
    <YAxis 
       
       ticks={[  relayData[0].LowerVoltageThreshold / 1.5   , relayData[0].LowerVoltageThreshold, relayData[0].UpperVoltageThreshold , relayData[0].UpperVoltageThreshold + 2.5]}
       domain={[ relayData[0].LowerVoltageThreshold / 1.5 ,  relayData[0].UpperVoltageThreshold + 2.5]}

    
    />
    <Tooltip />
    <Legend />
    <Line type="monotone" dot={false} dataKey="voltage" stroke="#8884d8" />
    <Line type="monotone" dot={false} dataKey="LowerVoltageThreshold" stroke="red" />
    <Line type="monotone" dot={false} dataKey="UpperVoltageThreshold" stroke="#82ca9d" />
  </LineChart>
</ResponsiveContainer>

  )


     }

   
      </div>
      
      </Section>
        
    )
}

export default Graph
