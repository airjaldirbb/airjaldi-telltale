import React , {useState} from 'react'
import { Section } from './Pop'
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../redux/utils/api';
const fetchUsersRealy = async (id) => {

   
   
    const res = await fetch(`/api/getRelay`);
    return res.json();
  };

function AddUser({setAdd , relays}) {

  

    const { data, status  , isFetching } = useQuery("UsersRealy" , fetchUsersRealy ,
    {
       
        refetchInterval: 1000,
      }
    
    );
   const [relay , setrelay ] = useState('')
   const [img , setImage ] = useState('https://res.cloudinary.com/airjaldi/image/upload/v1622518068/avataaars-2_cg07t0.png')
   const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
   
    const onSubmit = data =>  {
    
 


 
   senddata(data);
 
    
    } 

    const senddata = async (data) => {

      try {
  const res = await api.post("/addRelay", data)
            
  await toast.success("realy added")
  await setAdd(false)
      }
      catch(err ){
        console.log(err)
        const errors = err.response.data.errors;
  
          if (errors) {
         toast.error(errors.msg);
          }
      }

      // api.post("/login", userData)
      // .then(res => {
      //   // Save to localStorage
  
      //   // Set token to localStorage
     
        
      // })
      // .catch(err => {
      //   const errors = err.response.data.errors;
  
      //   if (errors) {
      //     errors.forEach(error => toast.error(error.msg));
      //   }
      // }
      // );
      
    }
            


    
    return (
        <Section>
          <ToastContainer/>
        <div id="myModal" class="modal">
      
<div class="modal-content">
  
<div className="login-box" >


                    <div className="login-form" >
                    <i onClick={() => setAdd(false)  } className="fas fa-times"></i>
  
  <div className="head" >
      
     
     <h2> Add Relay </h2>
     

      
    
</div>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div   id={errors.networkName ? "active" : ""}   className="input-field" >
 <div className="left" >


 </div>

 <div    className="right" >
  <label>Network Name</label>
  <input  {...register("networkName", { required: true })}  placeholder="NetworkName" ></input>

 </div>

  </div>
  
  
        
           <div   id={errors.relayNetworkName ? "active" : ""}   className="input-field" >
 <div className="left" >


 </div>

 <div   className="right" >
  <label>Relay Name</label>
  <input  {...register("relayNetworkName", { required: true })}  placeholder="Relay Name" ></input>

 </div>

  </div>
  
  
  
  <div  id={errors.sensor ? "active" : ""}   className="input-field" >
 <div className="left" >


 </div>

 <div className="right" >
  <label>Sensor Name</label>
  <input type="text" {...register("sensor", { required: true })}  placeholder="Enter Sensor Name" ></input>
     
 </div>

  </div>
  <div   id={errors.batterytype ? "active" : ""}   className="input-field" >
 <div className="left" >

 </div>

 <div className="right" >
  <label>Batterytype</label>
  <input  {...register("batterytype", { required: true })}  placeholder="Enter Batterytype" ></input>
     
 </div>

  </div>
  
  <div  id={errors.batteryampere ? "active" : ""}   className="input-field" >
 <div className="left" >


 </div>

 <div className="right" >
  <label>Battery Ampere</label>
  <input  {...register("batteryampere", { required: true })}  placeholder="Enter Battery Ampere" ></input>
     
 </div>

  </div>
  
  
<div  id={errors.UpperVoltageThreshold ? "active" : ""}   className="input-field" >
<div className="left" >

</div>
<div className="right" >
  <label>Upper Voltage Threshold</label>
  <input  type="number" {...register("UpperVoltageThreshold", { required: true })} autocomplete="off" defaultValue="13.5" placeholder="Enter Upper Voltage Threshold" ></input>
  
  
 
  
 </div>
</div>
<div   id={errors.LowerVoltageThreshold ? "active" : ""}   className="input-field" >
<div className="left" >

</div>
<div className="right" >
  <label>Lower Voltage Threshold</label>
  <input type="number" {...register("LowerVoltageThreshold", { required: true })} autocomplete="off"  defaultValue="12"  placeholder="Enter Lower Voltage Threshold" ></input>
  
  
 
  
 </div>
</div>
<button>Register</button>

  </form>

                    </div>
                </div>
                 
                 
</div>

</div>
        </Section>
    )
}

export default AddUser
