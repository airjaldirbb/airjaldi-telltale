import React , {useState} from 'react'
import { Section } from './Pop'
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../redux/utils/api';

const options = [
  { value: 'north', label: 'North' },
  { value: 'south', label: 'South' },
  { value: 'east', label: 'East' },
  { value: 'west', label: 'West' },
];

function AddUser({setAdd , relays}) {

  

   
   const [zone , setzone ] = useState('')
   const [img , setImage ] = useState('https://res.cloudinary.com/airjaldi/image/upload/v1622518068/avataaars-2_cg07t0.png')
   const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
   
  const    handleChange = (selectedOptions) => {
    setzone(selectedOptions)
      }
      const onSubmit = data =>  {
    
  
   if ( zone ==="" ) {
    toast.error("Enter Network Zone")
   }  
   else {
    
     data.zone =  zone.value
     senddata(data);
   }
      
      } 

    const senddata = async (data) => {

      try {
  const res = await api.post("/addNetwork", data)
            
  await toast.success("Network added")
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
      
     
     <h2> Add Network </h2>
     

      
    
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
  
  
        
   
  <div    className="input-field" >
<div className="left" >

<i className="fas fa-network-wired"></i>
</div>

<div className="right" >
 <label>Network Relay</label>
 <Select
    value={zone}
    
    onChange={handleChange}
    name="realy"
    options={options} 
    className="basic-multi-select"
    classNamePrefix="select"
  />
    
</div>

 </div>
  


<button>Add</button>

  </form>

                    </div>
                </div>
                 
                 
</div>

</div>
        </Section>
    )
}

export default AddUser
