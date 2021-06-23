import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { Section} from './Style'
import { useParams } from 'react-router-dom';
import Notifications from './Notifications'
import moment from 'moment'
import Users from './Users'
import Comment from './Comment'

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
import Json from  './Json' 
import Loading from '../Loading/Loading';
import Graph from './Graph';

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
const fetchNews = async (id) => {

    const idd = id.queryKey[1]
 
   
    const res = await fetch(`/api/getNetworkProfile/${idd.id}/${idd.relay}`);
    return res.json();
  };
  const relayGraph = async (id) => {

    const idd = id.queryKey[1]
 
   
    const res = await fetch(`/api/relayGraph/${idd.relay}`);
    return res.json();
  };
function Dash({}) {
  let history = useHistory();
const params = useParams()
  
    const { data, status  , isFetching } = useQuery(["RelyProfile" , params ], fetchNews ,
    {
       
        refetchInterval: 1000,
      }
    
    );

    const { data:data1, status:status1  } = useQuery(["relayGraph" , params ], relayGraph ,
    {
       
        refetchInterval: 1000,
      }
    
    );

    const sub = ( one , zero , lower) => {

      console.log(one , zero )
      const avg =  one - zero
      const avg1 = zero-(lower -1)

    const   set =  (avg1/avg)

    var hours = Math.trunc(set/60);
    var minutes = set % 60;
    // console.log(hours +":"+ minutes);

    return (
      <div style={{marginTop:"2rem", fontFamily:"Montserrat-Bold" , color:"Orange"}} >
    Battery Will Die in :  {parseFloat(hours)}:HR
      &nbsp;
        {minutes.toFixed(0)}:MIN
      </div>
    )

      // var newDateObj = moment(oldDateObj).add(30, 'm').toDate();
    }
 

    return (
        <>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
        
   <Loading/>
        
        }
        {status === "success" && (

   <>
   {((data.sensors.filter(sets => sets.location === params.relay)).length === 0)
   ? 
   (
     <div>

       <h1  style={{ marginTop:"10rem", fontFamily:"Montserrat-Bold"}} >Relay Not Found in Sensor DataBase List</h1>
     </div>
   )
   :
   (
     <Section>
<div className="flex" >
          

          {data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay).map(number =>
          
          <div className="flex-1" >
          
              <div className="top" >
          
          <div className="left" >
          <div className="left-top" >
          <i class="fas fa-broadcast-tower"></i>
          
          <li><span>Relay Name</span><span>{params.relay}</span></li>
          
          </div>
          <div className="left-bottom" >
          
          <li><h4>Current Voltage</h4><span>{ parseFloat(data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].voltage).toFixed(1)}</span></li>
          <li><h4>Ampere</h4><span> {data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].batteryampere} </span></li>
          </div>
              </div> 
              <div className="right" >
          
          <div  style={{marginTop:"1rem"}} >
              <ReactSpeedometer
              maxValue={data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)[0].UpperVoltageThreshold + 2.5}
              value={data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].voltage}
              valueFormat={'d'}
              customSegmentStops={[ 0 ,data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)[0].LowerVoltageThreshold / 1.5  ,   data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)[0].LowerVoltageThreshold ,  data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)[0].UpperVoltageThreshold ,  data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)[0].UpperVoltageThreshold + 2.5]}
              style={{marginTop:"1rem" ,}}
              textColor={"red"}
              width={200}
              height={110}
          
              segmentColors={[
                  "#bf616a",
                  "#d08770",
                  "#ebcb8b",
                  "#a3be8c",
                  "#b48ead",
                ]}
              
            
            />
           
           
          
          
            </div>
            <span>{moment(data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].reading_time).format("dddd, MMMM Do YYYY, h:mm a")}</span> 
          
          
          
            
          
            {(() => {
                  if (data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].voltage < data.sensors.filter(sets => sets.location === number.relayNetworkName)[1].voltage) {
                       return (
                    sub(data.sensors.filter(sets => sets.location === number.relayNetworkName)[1].voltage , data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].voltage ,  data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)[0].LowerVoltageThreshold)
                       )
                  }  else {
                    return (
                     null
                    )
                  }
                })()}
          
          
          
          </div> 
          
          
              </div>
          
            
          
          </div>
          
          
          
          
          
          
          )}
          
          <div className="flex-2" >
          
          <Notifications id={params.relay}/>
          
          
          </div>
           
          
          
          
          
            </div>
          
            {data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay).map(number =>
          <>
            {status1 === "error" && <p>Error fetching data</p>}
        {status1 === "loading" && 
        
 <div className="loading"  >
   
   <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1615785167/cm5bk5luzcwquerawyfc.gif" ></img>
 
 </div>
        
        }
        {status1 === "success" && (

   <>
          <Graph  relayData={data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)} data={data1} />
          
          </>
        )}
          
          </>
          )}
          
          <Users id={params.id} relayData={data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)} relay={params.relay} />
          
          <Comment  network={params.id} relay={params.relay}  />
          
          <Json  sens={data.sensors}  id={params.id} sensor={data.sensors} data ={data.data.relayNetwork.filter(sets => sets.relayNetworkName === params.relay)} relay={params.relay} />
           
           
           </Section >
   )
   
   

   }
   
 


 
  </>
       )}
      

   
      

    
    
    </>
    )
}

export default Dash


