import React , {useState} from 'react'
import moment from 'moment'
import AddUser from './AddUser'
import { ToastContainer, toast } from 'react-toastify';
import { useQuery } from "react-query";
import api from '../../redux/utils/api';
import { useForm } from "react-hook-form";
import axios from 'axios';

const fetchUsers = async (id) => {

    const idd = id.queryKey[1]
   
    const res = await fetch(`/api/NetworkUsers/${idd}`);
    return res.json();
  };

function Users({relay , id,  relayData}) {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = async data => {
    
    if(data.UpperVoltageThreshold < data.LowerVoltageThreshold){
       toast.error("UpperVoltageThreshold must be greater then  LowerVoltageThreshold", {

        position: "top-right",
       })
    }
    else {
      data.network = id
      data.location = relay
      console.log(data)
      
      try {
         const res = await  api.post('/updateThresHold', data)
           await toast.success("Threshold Upadted")
      }
      catch(err){
        console.log(err)
      }

     


    }
    

  }

  const [  visible , setvisible] = useState(false);
  const toggleMenu = id => {
    setvisible(id)
}

const delnews = async (id) => {
  try {
    const res = await api.patch(`/deleteUser/${id}`)
              
    await toast.success("User Deleted")
    await setvisible(false)
        }
        catch(err ){
          console.log(err)
          const errors = err.response.data.errors;
    
            if (errors) {
              errors.forEach(error => toast.error(error.msg));
            }
        }
}
  console.log(relayData)
    const { data, status  , isFetching } = useQuery(["Users" , relay ], fetchUsers ,
    {
       
        refetchInterval: 1000,
      }
    
    );
    const [add , setAdd ] = useState(false)

    return (
      <>
        <div className="users"  >
           <div className="left" > 
           <div className="head" >
           <h2>Set Relay Parameters</h2>

</div>
      
<div className="data" >
              
              <form  form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field" >
            <div className="field" >
              <label>Battery Ampere</label>
            <input   type="number"  defaultValue={relayData[0].batteryampere} />
            </div>

            <div className="field" >
              <label>Upper Voltage Threshold</label>
            <input   id={errors.UpperVoltageThreshold ? "active" : ""}  defaultValue="test" {...register("UpperVoltageThreshold", { required: true })} type="number" step="any" defaultValue={relayData[0].UpperVoltageThreshold} />
            </div>
            <div className="field" >
              <label>Standard Voltage</label>
            <input/>
            </div>
            <div className="field" >
              <label    >Lower Voltage Threshold</label>
            <input  id={errors.LowerVoltageThreshold ? "active" : ""}  {...register("LowerVoltageThreshold", { required: true })}  type="number" step="any" defaultValue={relayData[0].LowerVoltageThreshold}/>
            </div>
          </div>
          <div className="btn" >
          <button type="submit"  >Update</button> 
          </div>
  
             
              </form>
              </div>

     
             
            </div>
           <div className="right" >
             
             <div className="head" >

               <h2>Users Assigned</h2>

               <button onClick={() => setAdd(true) } >Add User</button>

             </div>
             
             <div className="data" >
  <div className="data-top" >

<span>Username</span>
<span>Status</span>
  </div>
  {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
         <ul>

           
         </ul>
        
        }
         {status === "success" && (
           <>
           {data.map(number => 
            <ul>
<li> <img src={number.avatar} ></img> <span>{number.name}</span></li>

<li>Active</li>

<li><img onClick={() => toggleMenu(number._id) } src="https://res.cloudinary.com/airjaldi/image/upload/v1622478083/Vector_geai32.png" ></img></li>

{visible === number._id &&
      
      <div id="myModal" class="modal">


<div class="modal-content">
        <div  className="text" > Do you  want to delete user ?  </div>
    
       <div className="btn" >
         <button  onClick={() => delnews(number._id) }  >Delete</button>
         <button onClick={() => setvisible(false) }  >Cancel</button>

         </div>
     </div> 
     </div>

   }

  </ul>

            )
    
           }
  </>
         )}

             </div>
               </div>
  
        </div>
                     {add === true ?  

                      (  <AddUser relays={relay} setAdd={setAdd} />)
                      : (
                       null
                      )
                      }
                      </>
    )
}

export default Users
