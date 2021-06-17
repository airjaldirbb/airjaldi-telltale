// import React , { useEffect, useState} from 'react';
// import { Section} from './Style'
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from 'react-toastify';

// import Clock from 'react-live-clock';
// import browser from 'browser-detect';


// function Password() {
  
// const result = browser();




//   // useEffect( async () => {
      
//   //   const res = await api.get('/settings')
//   //        await setdata(res.data)

//   // }, [data])

//   // if(data === '') {
//   //     return (
//   //       <Loading/>
//   //     )
//   // }
    
   
//     return (
//         <Section>
//         <div class="mainDiv">
//         <div class="cardStyle">
//           <form   method="post" name="signupForm" id="signupForm">
            
//             <img src="https://res.cloudinary.com/airjaldi/image/upload/v1621069161/unnamed_fyng5z.png" id="signupLogo"/>
            
//             <h2 class="formTitle">
//           Settings
//             </h2>
             
//             <div class="inputDiv">
//             <label class="inputLabel" for="password">Email</label>
//            <span>"dsds</span>
//           </div>

//           <div class="inputDiv">
//             <label class="inputLabel" for="password"> Total  Network</label>
//           <span>'dsds</span>
//           </div>
            
//           <div class="inputDiv">
//             <label class="inputLabel" for="confirmPassword">Total People</label>
//            <span>'dssdds</span>
//           </div>
        
//           <div class="inputDiv">
//             <label class="inputLabel" for="confirmPassword">Total Partners</label>
//             <span>'sdsd</span>
//           </div>
//           <div class="inputDiv">
//             <label class="inputLabel" for="password">Password</label>
//             <span>******************</span>
//    <a href="/change-password" >Update</a>         
//           </div>
 
//           <div class="inputDiv">
//             <label class="inputLabel" for="password">TimeZone</label>
//             <span> <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/ Kolkata'} /> 
//             (GMT+5:30)
//             </span>
//           </div>

//           <div class="inputDiv">
//             <label class="inputLabel" for="password">Device</label>
//             <span> 
//        {result.os}
//        &nbsp;
//        {result.name}
//        {result.version}
//             </span>
//           </div>
//         </form>
//         </div>
//       </div>
//       </Section>
//     )
// }

// export default Password


import React from 'react'
 
 import browser from 'browser-detect';
 import { Section} from './Style'
 import { useQuery } from "react-query";
 import { useHistory } from "react-router-dom";
import Loading from '../Loading/Loading';
 const fetchDashboardDet = async (id) => {
  const res = await fetch(`/api/DashboardDet`);
  return res.json();
};
 function Setting() {
  const result = browser();
  let history = useHistory();
  const { data, status  } = useQuery("DashboardDet" , fetchDashboardDet )
  return (

    <>
       {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
       <Loading/>
     
        
        }
        {status === "success" && (
         <Section>
     <div class="mainDiv">
     <div class="cardStyle">
       <form   method="post" name="signupForm" id="signupForm">
            
         <img src="https://res.cloudinary.com/airjaldi/image/upload/v1621069161/unnamed_fyng5z.png" id="signupLogo"/>
            
         <h2 class="formTitle">
       Settings
         </h2>
             
         <div class="inputDiv">
         <label class="inputLabel" for="password">Email</label>
        <span></span>
       </div>

       <div class="inputDiv">
         <label class="inputLabel" for="password"> Total  Network</label>
       <span>{data.network}</span>
       </div>
            
       <div class="inputDiv">
         <label class="inputLabel" for="confirmPassword">Total Relays</label>
        <span>{data.relay}</span>
       </div>
        
       <div class="inputDiv">
         <label class="inputLabel" for="confirmPassword">Total Users</label>
         <span>{data.users}</span>
       </div>
       <div class="inputDiv">
         <label class="inputLabel" for="password">Password</label>
         <span>******************</span>
<a onClick={() => history.push(`update-password`)} >Update</a>         
       </div>
 
      

       <div class="inputDiv">
         <label class="inputLabel" for="password">Device</label>
         <span> 
    {result.os}
    &nbsp;
    {result.name}
    {result.version}
         </span>
       </div>
     </form>
     </div>
   </div>
   </Section>
        )}
  </>
  )
}

export default Setting

