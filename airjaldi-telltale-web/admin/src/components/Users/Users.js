import React, {useState} from 'react'
import { Section} from './Style'
import { useQuery } from "react-query";
import Loading from '../Loading/Loading';
import AddUser from './AddUser' 
import { ToastContainer, toast } from 'react-toastify';
import api from '../../redux/utils/api';
const fetchUsers = async (id) => {

   
   
    const res = await fetch(`/api/getRealyUsers`);
    return res.json();
  };
export default function Users() {
  
  const [add , setAdd ] = useState(false)

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
    const { data, status  , isFetching } = useQuery("Users" , fetchUsers ,
    {
       
        refetchInterval: 1000,
      }
    
    );

    return (
        <>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && 
       <Loading/>
        
     
        
        }
        {status === "success" && (
       
        <Section>
            <div className="flex" >
          

          <div className="top" >

              <div className="head" >
                  <h2>All Users</h2>
              </div>

              <div onClick={() => setAdd(true) } className="add-users" >
                  <span>Add New User</span>
                  <i className="fas fa-plus-circle"></i>
              </div>
          </div>

  
  <div className="data" >

      <div className="data-head" >

          <li>Sr. No.</li>
          <li>User Name</li>
          <li>Relay Assigned</li>
          <li>Status</li>

          <li>Action</li>
      </div>
{data.map((number, index)  => 
   <ol>

   <li>{index +1}</li>
   <li>{number.name}</li>
   <li>
   {number.relayNetwork.map(relay  => 
 
 <>
{relay.relayName}  ,
 </>
   
   )}
   
   </li>
   <li>
   
    <span>Active</span> 
   
   
   </li>
   
   <li>
   {/* <span id="relay"  >Assign Relay</span>  */}
   <span id="delete" onClick={() => toggleMenu(number._id) } >Delete</span> 
   
   </li>
 
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

   </ol>
     

)


}
   
  
  </div>

            </div>

         
      
      
        </Section>
   )}
      {add === true ?  

(  <AddUser setAdd={setAdd} />)
: (
 null
)


}


    </>
    )
}
