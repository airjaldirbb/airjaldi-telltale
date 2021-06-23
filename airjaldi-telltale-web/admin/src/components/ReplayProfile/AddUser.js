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

const fetchUsersNetwork = async (id) => {

 
 
  const res = await fetch(`/api/getNetwork`);
  return res.json();
};

function AddUser({setAdd , relays}) {

  

    const { data, status  , isFetching } = useQuery("UsersRealy" , fetchUsersRealy ,
    {
       
        refetchInterval: 1000,
      }
    
    );
   const [relay , setrelay ] = useState('')
   const [network , setnetwork ] = useState('')
   const [img , setImage ] = useState('https://res.cloudinary.com/dzcmadjl1/image/upload/v1618642890/izo5ri94zqjviheltfps.jpg')
   const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
   const    handleChange = (selectedOptions) => {
    setrelay(selectedOptions)
      }
    const onSubmit = data =>  {
    
 
      data.avatar = img 
      if( relay === '' ) {
           data.relayNetworks = []
      }
      else {
      data.relayNetworks =  relay.map(t => ({ relayName: t.value})) 
      }
      if( network === '' ) {
       data.network = []
      }
      else {
      data.network  = network.map(t => ({  relayNetwork: t.relayNetwork})) 
      }
     
      senddata(data); 
    } 

    const senddata = async (data) => {

      try {
  const res = await api.post("/adduser", data)
            
  await toast.success("User added")
  await setAdd(false)
      }
      catch(err ){
        console.log(err)
        const errors = err.response.data.errors;
  
          if (errors) {
            errors.forEach(error => toast.error(error.msg));
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
            
    const  upload = async (e) => {
 
  
   
      const files = e.target.files;
     setImage('https://res.cloudinary.com/dzcmadjl1/image/upload/v1610515663/HimTrek/nkvy6wlmekzb80khdi2f.gif')
      
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'gyywm2fy')
   
    const res = await fetch('	https://api.cloudinary.com/v1_1/airjaldi/image/upload', {
      method: 'POST',
      body:data
    })
          const file = await res.json()
          let link = file.secure_url
          
       await   setImage(link)
       }
  

    
    return (
        <Section>
          <ToastContainer/>
        <div id="myModal-1" class="modal-1">
      
<div class="modal-content-1">
  
<div className="login-box-1" >


                    <div className="login-form" >
                    <i onClick={() => setAdd(false)  } className="fas fa-times"></i>
  
  <div className="head" >
      
      <img src={img} ></img>
     
<label for="cafeavatar"><i class="fas fa-edit"></i></label>
     <input
       name="cafeavatar"
       type="file"
       onChange={upload}
      style={{display:"none"}}
       id="cafeavatar"/>
      
    
</div>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div   id={errors.name ? "active" : ""}   className="input-field" >
 <div className="left" >

 <i className="far fa-user"></i>
 </div>

 <div   className="right" >
  <label>Name</label>
  <input  {...register("name", { required: true })}  placeholder="Enter Name" ></input>

 </div>

  </div>
  <div  id={errors.email ? "active" : ""}   className="input-field" >
 <div className="left" >

 <i className="far fa-envelope"></i>
 </div>

 <div className="right" >
  <label>Email</label>
  <input  {...register("email", { required: true })}  placeholder="Enter Email" ></input>
     
 </div>

  </div>
  <div   id={errors.phone ? "active" : ""}   className="input-field" >
 <div className="left" >

 <i className="fas fa-phone"></i>
 </div>

 <div className="right" >
  <label>Phone</label>
  <input type="number" {...register("phone", { required: true })}  placeholder="Enter Phone" ></input>
     
 </div>

  </div>
  
  <div  id={errors.location ? "active" : ""}   className="input-field" >
 <div className="left" >

 <i className="fas fa-thumbtack"></i>
 </div>

 <div className="right" >
  <label>Your Location</label>
  <input  {...register("location", { required: true })}  placeholder="Enter Location" ></input>
     
 </div>

  </div>
  {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
<p>sdsd</p>
        
     
        
        }
 {status === "success" && (

<div    className="input-field" >
<div className="left" >

<i className="fas fa-network-wired"></i>
</div>

<div className="right" >
 <label>Network Relay</label>
 <Select
    value={relay}
    isMulti
    defaultValue={[relays]}
    onChange={handleChange}
    name="realy"
    options={data.map(t => ({ value: t.relayNetworkName, label: t.relayNetworkName})) } 
    className="basic-multi-select"
    classNamePrefix="select"
  />
    
</div>

 </div>
 
 )}
  
<div  id={errors.password ? "active" : ""}   className="input-field" >
<div className="left" >
<i class="fas fa-lock"></i>
</div>
<div className="right" >
  <label>Password</label>
  <input  {...register("password", { required: true })} autocomplete="off" type={passwordShown ? "text" : "password"} placeholder="Enter Password" ></input>
  
  {passwordShown ? <i  id='ab' class="fas fa-eye-slash" onClick={togglePasswordVisiblity}></i> : <i  id="ab" class="far fa-eye" onClick={togglePasswordVisiblity}></i>}
 
  
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
