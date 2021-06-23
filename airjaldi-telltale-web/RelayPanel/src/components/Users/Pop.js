

  import styled from 'styled-components'




  export const Section = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 1281px) {
  
    .modal {
   /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1111; /* Sit on top */
  padding-top: 1rem; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 1rem;
  border: 1px solid #888;
  width: 40%;
height: 90%;
min-height: 40rem;
display: flex;
justify-content: center;
  .login-box {
         
         width: 100%;
         height: 100%;
         
         left: 10%;
         display: flex;
         justify-content: space-between;
       
         flex-direction: column;;
        
         .login-form {
          .fa-times {
               position: absolute;
              right:1rem;
              top: 1rem;;
              font-size: 1.5rem;
              cursor: pointer;
             }
             width: 100%;
             height: 100%;
             background: #FFFFFF;
border-radius: 4px;
filter: drop-shadow(0px 12px 24px rgba(0, 0, 0, 0.15));
display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;;   
         .head {
             width: 90%;
             height: 20%;
             display: flex;
         justify-content: center;
         align-items: center;
     margin-top: 5%;
         flex-direction: column;;  
          position: relative;
          img {
            height: 100%;
          }
          i {
            position: absolute;
    bottom: 10%;
    color: #0085C5;
    font-size: 1.5rem;
          }
         } 
         form {
            width: 90%;
             height: 80%;
             display: flex;
         justify-content: space-evenly;
        
         flex-direction: column;; 
          
           button {
               width: 100%;
               height: 8%;
               border: none;
               font-size: 1.2rem;;
               color:white;
               background-color: ${props => props.theme.colors.blue};
               font-family: Montserrat-Bold  ;
           }
           #active {
              border: 1px solid red;
           }

           .input-field {
               width: 100%;
     
               height: 8%;
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

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
  
}

  `