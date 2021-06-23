import React  , {useState} from 'react'
import ReactSpeedometer from "react-d3-speedometer";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { Section} from './Style'
import { useParams } from 'react-router-dom';


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
import Loading from '../Loading/Loading';
import api from '../../redux/utils/api';
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



function Dash({}) {

  const [add , setAdd ] = useState(false)
  let history = useHistory();
const params = useParams()
  
    const { data, status  , isFetching } = useQuery('/relaylist', () =>
    api('/relaylist'),
    {
       
        refetchInterval: 1000,
      }
    )
    console.log(data)
    return (
    
        <>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
        
   <Loading/>
        
        }
        {status === "success" && (

   <>
   <Section>
<div className="flex" >
          

<div className="top" >

  

  
</div>


<div className="data" >

<div className="data-head" >

<li>Sr. No.</li>
<li>Realy Name</li>
<li>Location</li>
<li>Status</li>

<li>Action</li>
</div>


{data.data.map( ( number , index) =>  


<ul>

<li>{index +1}.</li>
<li>{number.location}</li>
<li>{number.network}</li>
<li>




<ReactSpeedometer
    maxValue={16}
    value={number.voltage}
    valueFormat={'d'}
    customSegmentStops={[ 0 ,10 , 12 ,  14 ,  16]}
   
    style={{marginTop:"1rem" ,}}
    textColor={"red"}
    width={200}
    height={125}
    segmentColors={[
      "#bf616a",
      "#d08770",
      "#ebcb8b",
      "#a3be8c",
      "#b48ead",
    ]}
  />
  






</li>

<li>
 
<span  onClick={()=> history.push(`/network/${number.network}/${number.location}`)}  >View</span> 


</li>
</ul>
  
)} 

</div>

  </div>

  </Section>

        
   
  </>
       )}
      

   
      
  
    
    
    </>
   
   
   )
}

export default Dash


