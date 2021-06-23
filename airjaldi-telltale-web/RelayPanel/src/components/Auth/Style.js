import styled from 'styled-components'



export const Section = styled.nav`
@media (min-width: 1025px) {
     width: 100%;
     height:100%;
     display: flex;
     justify-content: center;
     align-items: center;
     

     .flex {
        width: 100%;
        height: 100vh;
        min-height: 55rem;
        
        display: flex;
     justify-content: center;
     align-items: center;
   
         background-image: url("https://res.cloudinary.com/airjaldi/image/upload/v1622887307/telltale-banner_rvgw6a.png"); 
  background-color: #cccccc; 

  background-position: center; 
  
  background-size: cover; 
      
     .flex-1 {
         width: 35%;
  
         height:100%;
     }
     .flex-2 {
         width:65%;
  
       
     }
     .login-box {
         position: absolute;
         width: 40%;
         height: 60%;
          
         left: 10%;
         display: flex;
         justify-content: space-between;
       
         flex-direction: column;;
         .logo {
             width: 100%;
             height: 20%;
             img {
                 height: 100%;
             }

         }
         .login-form {
             width: 100%;
             height: 78%;
             background: #FFFFFF;
border-radius: 4px;
filter: drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.15));
display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;;   
         .head {
             width: 90%;
             height: 15%;
             display: flex;
         justify-content: center;
     margin-top: 5%;
         flex-direction: column;;   
         h2 {
            font-family: Montserrat-Bold  ;
         }
         } 
         form {
            width: 90%;
             height: 85%;
             display: flex;
         justify-content: space-evenly;
        
         flex-direction: column;; 
          
           button {
               width: 100%;
               height: 18%;
               border: none;
               font-size: 1.2rem;;
               color:white;
               background-color: ${props => props.theme.colors.blue};
               font-family: Montserrat-Bold  ;
           }

           .input-field {
               width: 100%;
     
               height: 17%;
               background: #FFFFFF;


border: 1px solid #DDDDDD;
box-sizing: border-box;
border-radius: 4px;
display: flex;
         justify-content: center;
        
         .left {
             width: 10%;
             height: 100%;
             display: flex;
             justify-content: center;
             align-items: center;
             color:#333333;
         
         }

         .right {
            width: 90%;
             height: 100%;
             display: flex;
             justify-content: space-evenly;
         
             color:#333333;
             flex-direction : column;
             position: relative;
             #ab {
                 position:absolute;
                 right: 2%;
             }
             label {
                 color:#9C9C9C;
                 font-size: 0.7rem;
             }
             
             input {
                font-family: Montserrat-Bold  ;
                 border: none;
                 color:black;
                 
             }
   
             input:focus{
    outline: none;
}
         }
  
           }
         }    

}

     }
     }
}
@media (max-width: 767px) {
width: 100%;
     height:100%;
     display: flex;
     justify-content: center;
     align-items: center;
     

     .flex {
        width: 100%;
        height: 100vh;
        min-height: 50rem;
        
        display: flex;
     justify-content: center;
     align-items: center;
   
         background-image: url("https://res.cloudinary.com/airjaldi/image/upload/v1622887307/telltale-banner_rvgw6a.png"); 
  background-color: #cccccc; 

  background-position: center; 
  
  background-size: cover; 
      
     .flex-1 {
         width: 35%;
  
         height:100%;
     }
     .flex-2 {
         width:65%;
  
       
     }
     .login-box {
    
         position: absolute;
         min-height: 30rem;
    width: 84%;
    height: 60%;
    top: 16%;
    left: 7%;

         display: flex;
         justify-content: space-between;
       
         flex-direction: column;;
         .logo {
             width: 100%;
             height: 20%;
             img {
                 height: 100%;
             }

         }
         .login-form {
             width: 100%;
             height: 78%;
             background: #FFFFFF;
border-radius: 4px;
filter: drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.15));
display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;;   
         .head {
             width: 90%;
             height: 15%;
             display: flex;
         justify-content: center;
     margin-top: 5%;
         flex-direction: column;;   
         h2 {
            font-family: Montserrat-Bold  ;
         }
         } 
         form {
            width: 90%;
             height: 85%;
             display: flex;
         justify-content: space-evenly;
        
         flex-direction: column;; 
          
           button {
               width: 100%;
               height: 18%;
               border: none;
               font-size: 1.2rem;;
               color:white;
               background-color: ${props => props.theme.colors.blue};
               font-family: Montserrat-Bold  ;
           }

           .input-field {
               width: 100%;
     
               height: 17%;
               background: #FFFFFF;


border: 1px solid #DDDDDD;
box-sizing: border-box;
border-radius: 4px;
display: flex;
         justify-content: center;
        
         .left {
             width: 10%;
             height: 100%;
             display: flex;
             justify-content: center;
             align-items: center;
             color:#333333;
         
         }

         .right {
            width: 90%;
             height: 100%;
             display: flex;
             justify-content: space-evenly;
         
             color:#333333;
             flex-direction : column;
             position: relative;
             #ab {
                 position:absolute;
                 right: 2%;
             }
             label {
                 color:#9C9C9C;
                 font-size: 0.7rem;
             }
             
             input {
                font-family: Montserrat-Bold  ;
                 border: none;
                 color:black;
                 
             }
   
             input:focus{
    outline: none;
}
         }
  
           }
         }    

}

     }
     }
}
`
