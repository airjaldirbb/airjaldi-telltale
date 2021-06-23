import React , {useState} from 'react';
import { Section } from './Style'
import List from './List'
import { useQuery } from "react-query";
import moment  from "moment"
import { useHistory } from "react-router-dom";
const fetchNotifications = async (id) => {


    const res = await fetch(`/api/getNotifications`);
    return res.json();
  };
  const fetchDashboardDet = async (id) => {
    const res = await fetch(`/api/DashboardDet`);
    return res.json();
  };
function Network() {
    let history = useHistory();
    const { data:data1, status:status1  } = useQuery("DashboardDet" , fetchDashboardDet )
    const { data, status  , isFetching } = useQuery("Notifications" , fetchNotifications ,
    {
       
        refetchInterval: 1000,
      }
    
    );


    const [ zone, setzone ] = useState('north')
    return (
        
        <Section>
        <div className="flex" >

  <div className="flex-1" >
  <div className="head" >
     <h3>The following relays require your attention</h3>
 </div>
 <div className="zone" >

     <li  onClick={()=> setzone('north')} id={  zone === "north"? "active" : '' } >North</li>
     <li  onClick={()=> setzone('south')} id={  zone === "south"? "active" : '' } >South</li>
     <li onClick={ ()=>setzone('east')}  id={  zone === "east"? "active" : '' } >East </li>
     <li  onClick={ ()=>setzone('west')}   id={  zone === "west"? "active" : '' }>West</li>
 </div>

<List id={zone} />
      
  </div>
  <div className="flex-2" >

 
 <div className="notifications" >
 
 <div className="head" >
     <h3>Notifications & Alerts</h3>
 </div>
 {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
        <div className="alert" >
            <div className="img" >

<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1615785167/cm5bk5luzcwquerawyfc.gif" ></img>
      </div>
            </div>
        
     
        
        }
        {status === "success" && (
 <div className="alert" >
    
   
    {data.map(number => 
    
    <li>
    <div  onClick={() => history.push(`/network/${number.network}/${number.location}`) } style={{background:`${number.status}`}}   className="i" > <i  class="fas fa-broadcast-tower"></i></div> <span><h5>{number.location}({number.network}) {number.message}  </h5><h6>{moment(number.reading_time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</h6></span> </li>


    )

    }

  
       
 
 </div>
  )}
 </div>

 {status1 === "error" && <p>Error fetching data</p>}
        {status1 === "loading" && 
        <div className="alert" >
            <div className="img" >


      </div>
            </div>
        
     
        
        }
        {status1 === "success" && (
 <div className="network" >
 
 
 <div onClick={() => history.push("/network") } className="tower" >


 <i class="fas fa-broadcast-tower"></i>

 <ul>
     <li>4</li>
     <li>Zone</li>
 </ul>
     
 </div>

 <div onClick={() => history.push("/network") }  className="tower" >


<i class="fas fa-broadcast-tower"></i>

<ul>
    <li>{data1.network}</li>
    <li>Networks</li>
</ul>
    
</div>

<div onClick={() => history.push("/allrelays") }  className="tower" >


<i class="fas fa-broadcast-tower"></i>

<ul>
    <li>{data1.relay}</li>
    <li>Relays</li>
</ul>
    
</div>

<div  onClick={() => history.push("/users") }  className="tower" >


<i class="fas fa-broadcast-tower"></i>

<ul>
    <li>{data1.users}</li>
    <li>Users</li>
</ul>
    
</div>






 </div>


        )}
  </div>
        </div>
        </Section>
    )
}

export default Network
