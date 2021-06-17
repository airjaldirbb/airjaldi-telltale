import React from 'react'
import { useQuery } from "react-query";
import moment from 'moment'
const fetchNotifications = async (id) => {

   
   
    const res = await fetch(`/api/getNotifications`);
    return res.json();
  };
function Notifications({id}) {

    const { data, status  , isFetching } = useQuery("Notifications" , fetchNotifications ,
    {
       
        refetchInterval: 1000,
      }
    
    );
    return (
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
           
          
           {data.filter(sets => sets.location === id ).map(number => 
           
           <li>
           <div style={{background:`${number.status}`}}   className="i" > <i  class="fas fa-broadcast-tower"></i></div> <span><h5>{number.location}({number.network}) {number.message}</h5><h6>{moment(number.reading_time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</h6></span> </li>
       
       
           )
       
           }
       
         
              
        
        </div>
         )}
        </div>
       
    )
}

export default Notifications
