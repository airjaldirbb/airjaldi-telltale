import React , {useState} from 'react';
import { Section } from './Style'
import List from './List'
import { useQuery } from "react-query";
import moment  from "moment"
import api from '../../redux/utils/api';
const fetchNotifications = async (id) => {


    const res = await  api(`/relayUserNotification`);
    return res.json();
  };

function Network() {
   
    const {  isLoading, error, data  } = useQuery('fetchLuke', () =>
    api('/relayUserNotification'),
    {
       
        refetchInterval: 1000,
      }
    )
    const [ zone, setzone ] = useState('north')
    return (
        
        <Section>
        <div className="flex" >

  <div className="flex-1" >
  <div className="head" >
     <h3> The following relays require your attention</h3>
 </div>
 

<List id={zone} />
      
  </div>
  <div className="flex-2" >

 
 <div className="notifications" >
 
 <div className="head" >
     <h3>Notifications & Alerts</h3>
 </div>
 {error && <div>Something went wrong ...</div>}

 {isLoading ? (
        <div className="alert" >
        <div className="img" >

<img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1615785167/cm5bk5luzcwquerawyfc.gif" ></img>
  </div>
        </div>
      ) : (

        <div className="alert" >
    
   
    {data.data.map(number => 
    
    <li>
    <div style={{background:`${number.status}`}}   className="i" > <i  class="fas fa-broadcast-tower"></i></div> <span><h5>{number.location}({number.network}) {number.message}  </h5><h6>{moment(number.reading_time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</h6></span> </li>


    )

    }

  
       
 
 </div>
 
      )}
 
 </div>


  </div>
        </div>
        </Section>
    )
}

export default Network
