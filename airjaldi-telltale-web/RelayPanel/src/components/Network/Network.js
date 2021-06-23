import Head from 'next/head';

import { Section} from './Style'
import Loading from '../Loading/Loading'
import { useHistory } from "react-router-dom";

import { useQuery } from "react-query";

const fetchzone = async () => {
    const res = await fetch("/api/getNetwork");
    return res.json();
  };
export default function Home({}) {
  let history = useHistory();
    const { data, status  , isFetching } = useQuery("Zone", fetchzone ,
  
    
    );

  return (
    <>
    {status === "error" && <p>Error fetching data</p>}
    {status === "loading" && 
    
 <Loading/>
    
    }
    {status === "success" && (


    <>
    
      <Section>
    
    <div class="grid"   >

        <div className="head" >
     <div className="head-1" >
         <h2>Select a Network to see list of its relays</h2>
     </div>

     <div className="head-2" >
     
         <h2>NORTH

         <div id="north" class="dropdown-content">

                
<div className="content" >
<div className="list" >

{data.map((number) => 
 
 <span onClick={() =>   history.push(`/network/${number.networkName}`)}   >{number.networkName}</span>

)}






</div>
<div className="list" >

</div>


</div>
</div>



         </h2>
         <h2>SOUTH

<div id="north" class="dropdown-content">

       
<div className="content" >
<div className="list" >

{data.filter(element => element.zone === "south").map((number) => 

<span   >{number.networkName}</span>

)}






</div>
<div className="list" >

</div>


</div>
</div>




</h2>

       
         <h2>EAST

         <div id="east" class="dropdown-content">

                
<div className="content" >
<div className="list" >

{data.filter(element => element.zone === "east").map((number) => 
 
 <span >{number.networkName}</span>

)}






</div>
<div className="list" >

</div>


</div>
</div>




         </h2>
        
        
         <h2>WEST

<div id="west" class="dropdown-content">

       
<div className="content" >
<div className="list" >

{data.filter(element => element.networkName === "west").map((number) => 

<span   >{number.networkName}</span>

)}






</div>
<div className="list" >

</div>


</div>
</div>




</h2>


   
     
     
     
     </div>
        </div>
    

   
    </div>

<div className="map" >


<img
              className="myImage"
        src='https://res.cloudinary.com/dzcmadjl1/image/upload/v1618377512/AirJaldi/yluwzprmhzewfrr8l5zt.png'
       
        layout="fill"
         
        objectFit="contain"
      />
</div>



      </Section>
     
</>
 
      )}
  
       
  
    </>
  );

}