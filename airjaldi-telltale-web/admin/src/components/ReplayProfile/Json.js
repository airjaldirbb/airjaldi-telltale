import React from 'react'

function Json({ relay, id , data , sens}) {
 

   
     const set =  sens.filter(sets => sets.location === relay) 
  

    return (
        <div className="json" >
         
    <div className="head" >
     <h1> Get /</h1>  
    </div>
            <code className="code" ng-non-bindable>
            &#123; <br></br>
            "location": {id},<br></br>

"network": {data[0].relayNetworkName},<br></br>
"battery_voltage": {set[0].voltage} , <br></br>
"email": "email@example.com", <br></br>

"phone": "0000000000" <br></br>

            &#125;
            </code>  

            </div>
        
   
    )
}

export default Json
