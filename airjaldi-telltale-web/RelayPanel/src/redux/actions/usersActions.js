import { ABOUT , NEWS , DRAFT, PUB , CARRER, PROFILE, SERVICES, TRAIN, STORY, NET, PEOPLE, MEMBER, PRO} from "./types";
import axios from 'axios';

import api from '../utils/api';

import setAuthToken from "../utils/setAuthToken";
import { ToastContainer, toast } from 'react-toastify';
import people from "../../componets/admin/admin-people/people";
import router from "next/router";

  
  export const getAbout = () => dispatch => {
    api.get("/getAbout")
      .then(res => 
         
        dispatch({
          type: ABOUT,
          payload: res.data
        })
        )
      .catch(err =>
        console.log(err)
      );
  };

  export const editAbout = (data ,toggle) => async dispatch => {
     console.log(data)
    const  res =  await  api.post("/editAbout" , data)
   
    await   dispatch({
          type: ABOUT,
         payload:  res.data
        })
        await toggle()
        await toast.success("Partner Added")

        
   
      // .then(res => 
           
      //   dispatch({
      //     type: ABOUT,
      //     payload:  res.data
      //   })
      //   .then(res => {
      //         edit()
      //   }).then ( res=> {
      //     toast.success("Edit")
      //   }
      //   )
          
      //   )
      // .catch(err =>
      //   console.log(err)
      // );
  };

  export const editImage = (data , toggle) => async dispatch => {
    console.log(data)
   const  res =  await  api.post("/editImage" , data)
  
   await   dispatch({
         type: ABOUT,
        payload:  res.data
       })
     
       await toast.success("Edit Success")

      }


      

      export const addPartner = (data , toggle) => async dispatch => {
        console.log(data)
       const  res =  await  api.post("/addPartner" , data)
      
       await   dispatch({
             type: ABOUT,
            payload:  res.data
           })
         await toggle()
           await toast.success("Partner Added")
    
          }

          export const deletePartner = (data , toggle) => async dispatch => {
            console.log(data)
           const  res =  await  api.patch("/deletePartner" , data)
          
           await   dispatch({
                 type: ABOUT,
                payload:  res.data
               })
             await toggle()
               await toast.success("Partner Deleted")
        
              }

              export const editPartner = (data , toggle) => async dispatch => {
                console.log(data)
               const  res =  await  api.patch("/editPartner" , data)
              
               await   dispatch({
                     type: ABOUT,
                    payload:  res.data
                   })
                 await toggle()
                   await toast.success("Partner Edited")
            
                  }

                  export const editContact = (data , setInput) => async dispatch => {
                    console.log(data)
                   const  res =  await  api.patch("/editContact" , data)
                  
                   await   dispatch({
                         type: ABOUT,
                        payload:  res.data
                       })
                     await setInput(false)
                       await toast.success("Partner Edited")
                
                      }

                      export const getnews = () => async dispatch => {
                 
                       const  res =  await  api.get("/getNews")
                      
                       await   dispatch({
                             type: NEWS,
                            payload:  res.data
                           })
                         
                    
                          }

                          export const getDaftnews = () => async dispatch => {
                 
                            const  res =  await  api.get("/getNews")
                            const draft =  res.data.filter(element => element.status == "Draft");
                           
                         
                            await   dispatch({
                                  type: DRAFT,
                                 payload: draft
                                })
                              
                         
                               }

                               export const getPubnews = () => async dispatch => {
                 
                                const  res =  await  api.get("/getNews")
                                const draft =  res.data.filter(element => element.status == "Published");
                               
                             
                                await   dispatch({
                                      type: PUB,
                                     payload: draft
                                    })
                                  
                             
                                   }

                      export const addnews = (data  , Router) => async dispatch => {
                        console.log(data)
                       const  res =  await  api.patch("/addnews" , data)
                      
                       await   dispatch({
                             type: NEWS,
                            payload:  res.data
                           })
                           await Router.push('/admin-news')
                      
                           await toast.success("News Added")
                    
                          }

                          export const editnews = (data  , Router) => async dispatch => {
                            console.log(data)
                           const  res =  await  api.patch("/editnews" , data)
                          
                           await   dispatch({
                                 type: NEWS,
                                payload:  res.data
                               })
                               await Router.push('/admin-news')
                          
                               await toast.success("News Edited")
                        
                              }
    

                          export const deleteNews = (id , set) => async dispatch => {
     
                           const  res =  await  api.patch(`/deleteNews/${id}` )
                          
                           await   dispatch({
                                 type: NEWS,
                                payload:  res.data
                               })
                              
                               await set(false)
                          
                               await toast.success("News Deleted")
                        
                              }

                              export const getcarrer = () => async dispatch => {
     
                                const  res =  await  api.get(`/getcarrer` )
                               
                                await   dispatch({
                                      type: CARRER,
                                     payload:  res.data
                                    })
                                   
                              
                               
           
                             
                                   }

                                   export const editCarrerImage = (data , toggle) => async dispatch => {
                                    console.log(data)
                                   const  res =  await  api.post("/editCarrerImage" , data)
                                  
                                   await   dispatch({
                                         type: CARRER,
                                        payload:  res.data
                                       })
                                     
                                       await toast.success("Edit Success")
                                
                                      }
                                
                                      export const editCarrer = (data ,toggle) => async dispatch => {
                                        console.log(data)
                                       const  res =  await  api.post("/editCarrer" , data)
                                      
                                       await   dispatch({
                                             type: CARRER,
                                            payload:  res.data
                                           })
                                           await toggle()
                                           await toast.success("Carrer  Edited")
                                   
                                           
                                      
                                      
                                     };

                                     export const addcarrer = (data  , Router) => async dispatch => {
                                      console.log(data)
                                     const  res =  await  api.patch("/addcarrer" , data)
                                    
                                     await   dispatch({
                                           type: CARRER,
                                          payload:  res.data
                                         })
                                         await Router.push('/admin-carrer')
                                    
                                         await toast.success("Carrer Added")
                                  
                                        }

                                        export const editContactCarrer = (data , setInput) => async dispatch => {
                                          console.log(data)
                                         const  res =  await  api.patch("/editContactCarrer" , data)
                                        
                                         await   dispatch({
                                               type: CARRER,
                                              payload:  res.data
                                             })
                                           await setInput(false)
                                             await toast.success("Carrer Edited")
                                      
                                            }
                                            export const getprofile = () => async dispatch => {
                 
                                              const  res =  await  api.get("/getprofile")
                                             
                                              await   dispatch({
                                                    type: PROFILE,
                                                   payload:  res.data
                                                  })
                                                
                                           
                                                 }                     


                                                 export const editProfileImage = (data , toggle) => async dispatch => {
                                                  console.log(data)
                                                 const  res =  await  api.post("/editProfileImage" , data)
                                                
                                                 await   dispatch({
                                                       type: PROFILE,
                                                      payload:  res.data
                                                     })
                                                   
                                                     await toast.success("Edit Success")
                                              
                                                    }

                                                    export const editProfile = (data ,toggle) => async dispatch => {
                                                      console.log(data)
                                                     const  res =  await  api.post("/editProfile" , data)
                                                    
                                                     await   dispatch({
                                                           type: PROFILE,
                                                          payload:  res.data
                                                         })
                                                         await toggle()
                                                         await toast.success("Profile  Edited")
                                                 
                                                         
                                                    
                                                    
                                                   };   

                                                   export const editDescription = (data ,toggle) => async dispatch => {
                                                    console.log(data)
                                                   const  res =  await  api.post("/editDescription" , data)
                                                  
                                                   await   dispatch({
                                                         type: PROFILE,
                                                        payload:  res.data
                                                       })
                                                       await toggle()
                                                       await toast.success("Profile  Edited")
                                               
                                                       
                                                  
                                                  
                                                 };   

                                                 export const getServices = () => async dispatch => {
                 
                                                  const  res =  await  api.get("/getServices")
                                                 
                                                  await   dispatch({
                                                        type: SERVICES,
                                                       payload:  res.data
                                                      })
                                                    
                                               
                                                     }      

                                                     export const editServicesImage = (data , toggle) => async dispatch => {
                                                      console.log(data)
                                                     const  res =  await  api.post("/editServicesImage" , data)
                                                    
                                                     await   dispatch({
                                                           type: SERVICES,
                                                          payload:  res.data
                                                         })
                                                       
                                                         await toast.success("Edit Success")
                                                  
                                                        }

                                                        export const edittraningImage = (data , toggle) => async dispatch => {
                                                          console.log(data)
                                                         const  res =  await  api.post("/edittraningImage" , data)
                                                        
                                                         await   dispatch({
                                                               type: TRAIN,
                                                              payload:  res.data
                                                             })
                                                           
                                                             await toast.success("Edit Success")
                                                      
                                                            }
    
                                                        export const editServices = (data ,toggle) => async dispatch => {
                                                          console.log(data)
                                                         const  res =  await  api.post("/editServices" , data)
                                                        
                                                         await   dispatch({
                                                               type: SERVICES,
                                                              payload:  res.data
                                                             })
                                                             await toggle()
                                                             await toast.success("Services  Edited")
                                                     
                                                             
                                                        
                                                        
                                                       };   

                                                       export const editTraning = (data ,toggle) => async dispatch => {
                                                        console.log(data)
                                                       const  res =  await  api.post("/editTraning" , data)
                                                      
                                                       await   dispatch({
                                                             type: TRAIN,
                                                            payload:  res.data
                                                           })
                                                           await toggle()
                                                           await toast.success("Services  Edited")
                                                   
                                                           
                                                      
                                                      
                                                     };   


                                                       export const editServicesData= (data ,edit , edit2, edit3) => async dispatch => {
                                                        console.log(data)
                                                       const  res =  await  api.patch("/editServicesData" , data)
                                                      
                                                       await   dispatch({
                                                             type: SERVICES,
                                                            payload:  res.data
                                                           })
                                                            
                                                           await toast.success("Services  Edited")
                                                           await window.location.reload(); 
                                                           
                                                      
                                                      
                                                     };   
                                                     export const edittranningData= (data ,edit , edit2, edit3) => async dispatch => {
                                                      console.log(data)
                                                     const  res =  await  api.patch("/edittranningData" , data)
                                                    
                                                     await   dispatch({
                                                           type: TRAIN,
                                                          payload:  res.data
                                                         })
                                                          
                                                         await toast.success("Services  Edited")
                                                         await window.location.reload(); 
                                                         
                                                    
                                                    
                                                   };   


                                                     export const editServicesDataImage= (data ,edit , edit2, edit3) => async dispatch => {
                                                      console.log(data)
                                                     const  res =  await  api.patch("/editServicesDataImage" , data)
                                                    
                                                     await   dispatch({
                                                           type: SERVICES,
                                                          payload:  res.data
                                                         })
                                                          
                                                         await toast.success("Services  Edited")
                                                        
                                                         
                                                    
                                                    
                                                   };

                                                   export const editTranningDataImage= (data ,edit , edit2, edit3) => async dispatch => {
                                                    console.log(data)
                                                   const  res =  await  api.patch("/editTranningDataImage" , data)
                                                  
                                                   await   dispatch({
                                                         type: TRAIN,
                                                        payload:  res.data
                                                       })
                                                        
                                                       await toast.success("Services  Edited")
                                                      
                                                       
                                                  
                                                  
                                                 };


                                                     export const getTranning= (data) => async dispatch => {
                                                      
                                                     const  res =  await  api.get("/getTranning" , data)
                                                    
                                                     await   dispatch({
                                                           type: TRAIN,
                                                          payload:  res.data
                                                         })
                                                 
                                                 
                                                         
                                                    
                                                    
                                                   };  

                                                   export const getfieldStories = () => async dispatch => {
                 
                                                    const  res =  await  api.get("/fieldStories")
                                                   
                                                    await   dispatch({
                                                          type: STORY,
                                                         payload:  res.data
                                                        })
                                                      
                                                      }

                                                      export const addstory = (data  , Router) => async dispatch => {
                                                        console.log(data)
                                                       const  res =  await  api.patch("/addstory" , data)
                                                      
                                                       await   dispatch({
                                                             type: STORY,
                                                            payload:  res.data
                                                           })
                                                           await Router.push('/admin-fieldStories')
                                                      
                                                           await toast.success("News Added")
                                                    
                                                          }



                                                          export const deletefieldStories = (id , set) => async dispatch => {
                                                            
                                                            const  res =  await  api.patch(`/deletefieldStories/${id}` )
                                                           
                                                            await   dispatch({
                                                                  type: STORY,
                                                                 payload:  res.data
                                                                })
                                                               
                                                                await set(false)
                                                           
                                                                await toast.success("Story Deleted")
                                                         
                                                               }

                                                               export const getNetwork = () => async dispatch => {
                                                            
                                                                const  res =  await  api.get(`/getNetwork`)
                                                               
                                                                await   dispatch({
                                                                      type: NET,
                                                                     payload:  res.data
                                                                    })
                                                                 }
                                                          export const addNetwork = (id , Router) => async dispatch => {
                                                            
                                                            const  res =  await  api.post(`/addNetwork`  , id)
                                                           
                                                         
                                                               
                                                               
                                                             
                                                                await toast.success("Network Added")

                                                                await Router.push(`/admin-network/${res.data._id}`)
                                                         
                                                               }
                                                               export const addMemberPeople = (data , Router , id) => async dispatch => {
                                                            
                                                                const  res =  await  api.patch(`/addMember`  , data)
                                                               
                                                             
                                                                    try {
                                                                   
                                                                 
                                                                    await toast.success(" Added Succes")
    
                                                                    await Router.push(`/admin-network/${id}`)
                                                                    }
                                                                    catch(err){
                                                                      console.log(err)
                                                                    }
                                                             
                                                                   }

                                                               export const editNetwork = (id , Router) => async dispatch => {
                                                            
                                                                const  res =  await  api.patch(`/editNetwork`  , id)
                                                               
                                                             
                                                                   
                                                                   
                                                                 
                                                                    await toast.success("Network Edited")
    
                                                                    await Router.push(`/admin-network/${res.data._id}`)
                                                             
                                                                   }


                                                                   export const deleteNetwork = (id , set) => async dispatch => {
                                                            
                                                                    const  res =  await  api.patch(`/deleteNetwork/${id}` )
                                                                   
                                                                    await   dispatch({
                                                                          type: NET,
                                                                         payload:  res.data
                                                                        })

                                                                        set(false)
                                                                       
                                                                       
                                                                     
                                                                        await toast.success("Network Deleted")
        
   
                                                                 
                                                                       }
                                                                       export const getCategory = (id ) => async dispatch => {

                                                            
                                                                        const  res =  await  api.get(`/getCategory` )
                                                                       
                                                                        await   dispatch({
                                                                              type: PEOPLE,
                                                                             payload:  res.data
                                                                            })
    
                                                                       
            
                                                                        

                                                                         
                                                                     
                                                                           }
                                                                           

                                                                       export const addCategory = (id , set , setcategory) => async dispatch => {

                                                                        try {
                                                            
                                                                        const  res =  await  api.patch(`/addCategory` , id )
                                                                       
                                                                        await   dispatch({
                                                                              type: PEOPLE,
                                                                             payload:  res.data
                                                                            })
    
                                                                            set()
                                                                           
                                                                           
                                                                            setcategory('')
                                                                            await toast.success("Category Added")
            
                                                                          }

                                                                          catch(err) {
                                                                          
                                                                            const errors = err.response.data.errors;
                                                                        console.log(errors)
                                                                            if (errors) {
                                                                              errors.forEach(error => toast.error(error.category));
                                                                            }
                                                                          }
                                                                     
                                                                           }


                                                                           export const EditCategory = (id , set) => async dispatch => {

                                                                         
                                                                
                                                                            const  res =  await  api.patch(`/EditCategory` , id )
                                                                           
                                                                            await   dispatch({
                                                                                  type: PEOPLE,
                                                                                 payload:  res.data
                                                                                })
        
                                                                                set(false)
                                                                               
                                                                               
                                                                             
                                                                                await toast.success("Category Edited")
                
                                                                              
    
                                                                         
                                                                         
                                                                               }


                                                                               export const deleteCategory = (id , set) => async dispatch => {

                                                                             
                                                                    
                                                                                const  res =  await  api.patch(`/deleteCategory/${id}` )
                                                                               
                                                                                await   dispatch({
                                                                                      type: PEOPLE,
                                                                                     payload:  res.data
                                                                                    })
            
                                                                                    set(false)
                                                                                   
                                                                                   
                                                                                 
                                                                                    await toast.success("Category Deleted")
                    
                                                                                  
        
                                                                                
                                                                                  
                                                                                 
                                                                             
                                                                                   }

                                                                                    export const addPostion = (id , set , setcategory) => async dispatch => {

                                                                                    try {
                                                                        
                                                                                    const  res =  await  api.patch(`/addPostion` , id )
                                                                                   
                                                                                    await   dispatch({
                                                                                          type: PEOPLE,
                                                                                         payload:  res.data
                                                                                        })
                
                                                                                        set()
                                                                                        setcategory('')
                                                                                       
                                                                                       
                                                                                     
                                                                                        await toast.success("Position Added")
                        
                                                                                      }
            
                                                                                      catch(err) {
                                                                                      
                                                                                        const errors = err.response.data.errors;
                                                                                    console.log(errors)
                                                                                        if (errors) {
                                                                                          errors.forEach(error => toast.error(error.position));
                                                                                        }
                                                                                      }
                                                                                 
                                                                                       }
            
                                                                                       export const deletePostion = (id , set) => async dispatch => {

                                                                             
                                                                    
                                                                                        const  res =  await  api.patch(`/deletePostion/${id}` )
                                                                                       
                                                                                        await   dispatch({
                                                                                              type: PEOPLE,
                                                                                             payload:  res.data
                                                                                            })
                    
                                                                                            set(false)
                                                                                           
                                                                                           
                                                                                         
                                                                                            await toast.success("Job Position Deleted")
                            
                                                                                          
                
                                                                                        
                                                                                          
                                                                                         
                                                                                     
                                                                                           }
        

                                                                                           export const EditPostion = (id , set) => async dispatch => {

                                                                         
                                                                
                                                                                            const  res =  await  api.patch(`/EditPostion` , id )
                                                                                           
                                                                                            await   dispatch({
                                                                                                  type: PEOPLE,
                                                                                                 payload:  res.data
                                                                                                })
                        
                                                                                                set(false)
                                                                                               
                                                                                               
                                                                                             
                                                                                                await toast.success("Position Edited")
                                
                                                                                              
                    
                                                                                         
                                                                                         
                                                                                               }

                                                                                               export const getMember = (id ) => async dispatch => {

                                                                                               
                                                                          
                                                                                                          const  res =  await  api.get(`/getmember`  )
                                                                                                           
                                                                                                          await   dispatch({
                                                                                                                type: MEMBER,
                                                                                                               payload:  res.data
                                                                                                              })
                                      
                                                                                                             
                                                                                
                                                                                              
                                  
                                                                                                       
                                                                                                       
                                                                                                             }

                                                                                               export const addMember = (id ) => async dispatch => {

                                                                                      try {
                                                                
                                                                                                const  res =  await  api.patch(`/addMember` , id )
                                                                                                 
                                                                                                await   dispatch({
                                                                                                      type: MEMBER,
                                                                                                     payload:  res.data
                                                                                                    })
                            
                                                                                                   
                                                                                                   router.push("/admin-people/people")
                                                                                                   
                                                                                                 
                                                                                                    await toast.success("Member added")
                                    
                                                                                      }
                                                                                      catch(err) {
                                                                                      
                                                                                        const errors = err.response.data.errors;
                                                                                 
                                                                                        if (errors) {
                                                                                          errors.forEach(error => toast.error(error.member));
                                                                                        }
                                                                                      }
                        
                                                                                             
                                                                                             
                                                                                                   }


                                                                                                   export const EditOrder = (id , toggleback) => async dispatch => {

                                                                                               
                                                                          
                                                                                                    const  res =  await  api.patch(`/editOrder` , id  )
                                                                                                     
                                                                                                    await   dispatch({
                                                                                                          type: MEMBER,
                                                                                                         payload:  res.data
                                                                                                        })
                                
                                                                                                       
                                                                          await toggleback()
                                                                                        
                            
                                                                                                 
                                                                                                 
                                                                                                       }

                                                                                                       export const EditOrdercategory = (id , toggleback) => async dispatch => {

                                                                                               
                                                                          
                                                                                                        const  res =  await  api.patch(`/EditOrdercategory` , id  )
                                                                                                         
                                                                                                        await   dispatch({
                                                                                                              type: MEMBER,
                                                                                                             payload:  res.data
                                                                                                            })
                                    
                                                                                                           
                                                                              await toggleback()
                                                                                            
                                
                                                                                                     
                                                                                                     
                                                                                                           }

                                                                                                           export const deleteMember = (id , set) => async dispatch => {
     
                                                                                                            const  res =  await  api.patch(`/deleteMember/${id}` )
                                                                                                           
                                                                                                            await   dispatch({
                                                                                                                  type: MEMBER,
                                                                                                                 payload:  res.data
                                                                                                                })
                                                                                                               
                                                                                                                await set(false)
                                                                                                           
                                                                                                                await toast.success("Member Deleted")
                                                                                                         
                                                                                                               }

                                                                                                               export const editpeopleImage = (data , toggle) => async dispatch => {
                                                                                                                console.log(data)
                                                                                                               const  res =  await  api.post("/editpeopleImage" , data)
                                                                                                              
                                                                                                               await   dispatch({
                                                                                                                     type: PEOPLE,
                                                                                                                    payload:  res.data
                                                                                                                   })
                                                                                                                 
                                                                                                                   await toast.success("Edit Success")
                                                                                                            
                                                                                                                  }
                                                                                                            

                                                                                                                  export const editpeople = (data ,toggle) => async dispatch => {
                                                                                                                    console.log(data)
                                                                                                                   const  res =  await  api.post("/editpeople" , data)
                                                                                                                  
                                                                                                                   await   dispatch({
                                                                                                                         type: PEOPLE,
                                                                                                                        payload:  res.data
                                                                                                                       })
                                                                                                                       await toggle()
                                                                                                                       await toast.success("Edit Sucess")

                                                                                                                      }

                                                                                                                      export const addprojects = (data ,Router) => async dispatch => {
                                                                                                                        console.log(data)
                                                                                                                       const  res =  await  api.post("/addprojects" , data)
                                                                                                                       await   dispatch({
                                                                                                                        type: PRO,
                                                                                                                       payload:  res.data
                                                                                                                      })
                                                                                                                        Router.push('/admin-projects')
                                                                                                                           await toast.success("Add Sucess")
    
                                                                                                                          }


                                                                                                                          export const getprojects = (data ,toggle) => async dispatch => {
                                                                                                                            console.log(data)
                                                                                                                           const  res =  await  api.get("/getprojects" , data)
                                                                                                                        
                                                                                                                            
                                                                                                                           await   dispatch({
                                                                                                                            type: PRO,
                                                                                                                           payload:  res.data
                                                                                                                          })
        
                                                                                                                          }    

                                                                                                                          export const deleteProjects = (id ,toggle) => async dispatch => {
                                                                                                                            console.log(id)
                                                                                                                           const  res =  await  api.patch(`/deleteProjects/${id}`)
                                                                                                                        
                                                                                                                            
                                                                                                                           await   dispatch({
                                                                                                                            type: PRO,
                                                                                                                           payload:  res.data
                                                                                                                          })
                                                                                                                          await toggle(false)
                                                                                                                          await toast.success("Project Deleted")
        
                                                                                                                          }    



                                                                                                                          export const editProjects = (data , router) => async dispatch => {

                                                                                                                           const  res =  await  api.patch(`/editProjects` , data)
                                                                                                                        
                                                                                                                            
                                                                                                                           await   dispatch({
                                                                                                                            type: PRO,
                                                                                                                           payload:  res.data
                                                                                                                          }) 

                                                                                                                          await router.push("/admin-projects")
                                                                                                                          
                                                                                                                          await toast.success("Project Edited")
        
                                                                                                                          }    

                                                                                                                          export const editNetorkPeopele = (data , router  ,id) => async dispatch => {

                                                                                                                            const  res =  await  api.patch(`/editNetorkPeopele` , data)
                                                                                                                         
                                                                                                                             
                                                                                                                            await router.push(`/admin-network/${id}`)


                                                                                                                    await toast.success(" Edit  Succes")
 
         
                                                                                                                           }    