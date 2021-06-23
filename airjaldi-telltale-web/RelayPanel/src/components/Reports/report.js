

import React , { useState }from 'react'
import { CSVLink, CSVDownload } from "react-csv";
import moment from 'moment'
import generatePDF from "./reportGenerator";
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
  import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
function Graph({data}) {


    console.log(data)

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

  console.log(ed)
  console.log(sd)

const  result = data.filter(d => {var time = d.reading_time
 
         return   time <= sd &&  ed <= time
      
     });

     console.log(result)
     const date = Date().split(" ");
     // we use a date string to generate our filename.
     const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
     // ticket title. and margin-top + margin-left
   
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setendDate] = useState();
   
//     const changeDate = (date) => {

//      setStartDate(date)


//     }
//    const ed = "2021-05-28"
//     const  sd = "2021-05-30"
//   const  result = data.filter(d => {var time = d.reading_time
   
//            return   time < sd &&  ed < time
        
//        });
// console.log(result);

//     // let today     = "2021-05-27 15:16";
//     // console.log(moment( today).format('MM/DD/YYYY'));
//     const today = moment();
   
// const set =  today.format('DD/MM/YYYY')

//  const date = moment(startDate).format('MM/DD/YYYY')
 
// const set2  =  data.filter(sets => (moment(sets.reading_time).format('MM/DD/YYYY')) === date ) 

return (
       
<>
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
<h2>No Record Found</h2>
    </div>
  ):
  (
 <>

 <div className="button" >
             <button
              className="btn btn-primary"
              onClick={() => generatePDF(result)}
            >
              Download  Pdf
            </button>

    <CSVLink data={result} filename={`report_${dateStr}.csv`}  ><button>Download CSV</button></CSVLink>
    </div>
  </>
  )


     }

   
      </div>
     
      </>
        
    )
}

export default Graph
