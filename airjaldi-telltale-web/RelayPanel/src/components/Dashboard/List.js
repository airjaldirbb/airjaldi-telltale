import React from 'react'

import { useQuery } from "react-query";

import { useHistory } from "react-router-dom";

import ReactSpeedometer from "react-d3-speedometer";
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

function Dash({id}) {
  const {  isLoading, error, data  } = useQuery('getdataRelay', () =>
  api('/getdataRelay'),
  {
     
      refetchInterval: 1000,
    }
  )
    let history = useHistory();
    return (
        <>
       {error && <div>Something went wrong ...</div>}
       
        {isLoading ? (
    <div className='not-found' >

    <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1615785167/cm5bk5luzcwquerawyfc.gif" ></img>
            
                            </div> 
            
   ) : (

       
<>
  
  {(data.data.length) === 0 ?
        (
            <div className='not-found' >

<h2>All Relays Up</h2>

                </div> 
            
            
            
            ) :

        (
            <div className="zone-city" >
            {data.data.map(number =>
                <div className="tower" >
     <ul>
                    <li className="net_name" >{number.location}</li>
                    <li>Network Name</li>
                    <li>The network needs your attention</li>
                </ul>
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
                     
            
               <button onClick={() =>   history.push(`/network/${number.network}/${number.location}`) } >    View Details</button>
                
                    
                </div>
               
               
               )
              
               }
               </div>
        )



  }


 

 </>





      )}
      
    
      

   
      

    
    
    </>
    )
}

export default Dash


