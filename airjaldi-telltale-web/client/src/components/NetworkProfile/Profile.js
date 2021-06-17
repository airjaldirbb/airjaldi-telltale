import React  , {useState} from 'react'
import ReactSpeedometer from "react-d3-speedometer";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { Section} from './Style'
import { useParams } from 'react-router-dom';
import AddRelay from './AddRelay'

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
   
    const res = await fetch(`/api/getNetworkProfile/${idd}`);
    return res.json();
  };
function Dash({}) {

  const [add , setAdd ] = useState(false)
  let history = useHistory();
const params = useParams()
  
    const { data, status  , isFetching } = useQuery(["Stories" , params.id ], fetchNews ,
    {
       
        refetchInterval: 1000,
      }
    
    );
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

    <div className="head" >
        <h2>{params.id}</h2>
    </div>

    <div onClick={() => setAdd(true) } className="add-users" >
        <span>Add Relay</span>
        <i className="fas fa-plus-circle"></i>
    </div>
</div>


<div className="data" >

<div className="data-head" >

<li>Sr. No.</li>
<li>Realy Name</li>
<li>Network</li>


<li>Status</li>

<li>Action</li>
</div>


{data.data.relayNetwork.map( ( number , index) =>  


<ul>


<li>{index +1}.</li>
<li>{number.relayNetworkName}</li>
<li>{params.id}</li>

<li>


  {data.sensors.filter(sets => sets.location === number.relayNetworkName)[0]===   undefined ?
  (
<ReactSpeedometer
    maxValue={16}
    value={0}
    valueFormat={'d'}
    customSegmentStops={[ 0 , 8 ,  12 , 14 ,  16   ]}
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
  ):
  (

<ReactSpeedometer
    maxValue={number.UpperVoltageThreshold + 2.5}
    value={data.sensors.filter(sets => sets.location === number.relayNetworkName)[0].voltage}
    valueFormat={'d'}
    customSegmentStops={[ 0 ,number.LowerVoltageThreshold / 1.5 , number.LowerVoltageThreshold ,  number.UpperVoltageThreshold ,  number.UpperVoltageThreshold + 2.5]}
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
  )

  }





</li>

<li>
 

<span  onClick={()=> history.push(`/network/${params.id}/${number.relayNetworkName}`)} >View</span> 



</li>
</ul>
  
)}


</div>

  </div>

  </Section>

        
   
  </>
       )}
      

   
      
      {add === true ?  

(  <AddRelay relays={params.id} setAdd={setAdd} />)
: (
 null
)
}
    
    
    </>
    )
}

export default Dash


