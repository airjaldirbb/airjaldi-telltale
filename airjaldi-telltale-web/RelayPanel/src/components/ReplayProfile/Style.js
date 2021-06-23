

  import styled from 'styled-components'




  export const Section = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 1281px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  .flex {
          width: 100%;
         
          display: flex;
          justify-content: space-evenly;
          
          .flex-1 {
            width: 55%;
          height: 20rem;
            margin-bottom: 4rem;
          
            border-radius: 0.5rem;
  display: flex;

  align-items: center;;
  justify-content: space-evenly;
  flex-direction: column;
   background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
   
   .top{
    display: flex;

align-items: center;;
justify-content: space-evenly;

height:  95%;
width: 95%;

.left {
    display: flex;

align-items: center;;
justify-content: space-evenly;
flex-direction: column;
height:  100%;
width: 49%;

.left-top {
    display: flex;
 width: 95%;
align-items: left;
justify-content: space-evenly;

li {
    width: 50%;
    display: flex;

justify-content: space-evenly;
flex-direction: column;

span:nth-child(1) {
    color: #797979;
    font-size:0.9rem;

}
span:nth-child(2) {
    color:#268EC7;
    font-weight: 900;
}
}
i {
    font-size: 2rem;;
padding:0.5rem;
padding-top: 0.7rem;
padding-bottom: 0.7rem;
    background:#268EC7;
    border-radius: 50%;
    color: white;

}

}
.left-bottom {
    display: flex;
 width: 90%;
 height: 50%;
align-items: left;
justify-content: space-evenly;
flex-direction: column;
li {
    width: 70%;
    list-style: none;
    align-items: left;
    display: flex;
justify-content: space-between;
h4 {
    font-weight: 900;
}

}
}
}

.right {
    display: flex;

align-items: center;
justify-content: center;
flex-direction: column;
height:  100%;
width: 49%;

}
   }
 
    
}

          .flex-2 {
             
           margin-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;;
  justify-content: center;
  flex-direction: column;
 width: 40%;
  .notifications {
    height: 20rem;
     background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;;
  justify-content: center;
  flex-direction: column;
  .head {
      height: 10%;
     
      width: 90%;
      display: flex;
  justify-content: center;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-family: Montserrat-Bold;
  }

  }

  .alert {
    height: 90%;
     
      width: 90%;
      display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  flex-direction: column;
  ::-webkit-scrollbar {
  width: 0.5em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
::-webkit-scrollbar-thumb {
  background-color: darkgrey;

}
.img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 2rem;;
  }
}
  li {
    margin-top: 0.5rem;
margin-bottom: 0.5rem;
      list-style: none;
      width: 100%;
      display: flex;
      justify-content: space-around;
      height: 3rem;;
     ;
      .i {
          width: 10%;
          display: flex;
      justify-content: center;
      align-items: center;
     border-radius: 0.2rem;;
      background-color: orange;
      i {
          color:white;
          
      }
      }
      span {
        width: 87%;
        display: flex;
      justify-content: space-evenly;
  
      flex-direction: column;
      h5 {
          line-height: 1.6;
           font-size: 0.8rem;;
           font-family: Montserrat-Bold;
      }
      }
      
  }
  }

  }
 
  
          }

      }

      .users {
        width: 100%;
          margin-top: 5rem;
          margin-bottom: 5rem;
         
         display: flex;
         justify-content: space-evenly;
  height: 25rem;

    display: flex;
  .left {
    border-radius:1rem;
   width: 48%;
   height: 100%;
    background-color:  ${props => props.theme.colors.background};
   box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
   display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   .head {
    display: flex;
  justify-content: space-between;
  align-items: center;
 
  width: 90%;
  height: 15%;
 
  }
  .data {
    display: flex;
  justify-content: flex-start;
 
  flex-direction: column;
    
    align-items: center;
  width: 90%;
  height: 85%;
 
  
  form {

    width: 100%;
    
    display: flex;
  justify-content:space-around;
  flex-direction: column;
  height: 100%;
  
  
.input-field {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  
  width:100%;
  height: 50%;
  .field {
    display: flex;
    justify-content: center;
    flex-direction: column;
 width: 48%;
 input {
   height: 2rem;
   border: 1px solid #ECE9F1;
box-sizing: border-box;
border-radius: 4px;
 }
 #active {
  border: 1px solid red;
 }
 label {
   margin-bottom: 0.5rem;
 }
  }
}

.btn {
  display: flex;
  justify-content: flex-end;
height: 30%;
button {
margin-top: 2rem;
  color:white;
  background: #268EC7;
border-radius: 10px;
width: 20%;
height: 30%;
}
}

   
  
  }

  ul {
 
    height: 3rem;
    display: flex;
    align-items: center;
   border: 1px solid #EBEFF2;

    justify-content: flex-start;
    li:nth-child(2) {
     color: #2C7641; 
     display: flex;
    align-items: center;
   margin-left: 0.8rem;
    justify-content: center;
    width:30%;
   }
   li:nth-child(1) {
    margin-left: 2rem;
    display: flex;
    align-items: center;
   
    justify-content: flex-start;
    img {
      width: 2rem;

    }
    width:30%;
   }
   li:nth-child(3) {
    display: flex;
    align-items: right;
    margin-right: 2rem;
    justify-content: flex-end;
    width:40%;
    i {
      color:  red;
       font-size: 1.5rem;
    }
   }
  li {
    

  }
  }
  
  }
  }
  .right {
    border-radius:1rem;
   width: 48%;
   height: 100%;
    background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
  
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .head {
    display: flex;
  justify-content: space-between;
  align-items: center;
 
  width: 90%;
  height: 15%;
  button {
    color:white;
    height: 70%;
    border: none;
    width: 30%;
    background: #268EC7;

  }
  }
    
  .data {
    display: flex;
  justify-content: flex-start;
 
  flex-direction: column;
 
  width: 100%;
  height: 85%;

  .data-top {
    margin-left: 2rem;
    width: 45%;
  
    display: flex;
  justify-content:space-between;
  height: 9%;
  span {
    color: #797979;

  }
   
  
  }

  ul {
 
    height: 3rem;
    display: flex;
    align-items: center;
   border: 1px solid #EBEFF2;

    justify-content: flex-start;
    li:nth-child(2) {
     color: #2C7641; 
     display: flex;
    align-items: center;
   margin-left: 0.8rem;
    justify-content: center;
    width:30%;
   }
   li:nth-child(1) {
    margin-left: 2rem;
    display: flex;
    align-items: center;
   
    justify-content: flex-start;
    img {
      width: 2rem;

    }
    width:30%;
   }
   li:nth-child(3) {
    display: flex;
    align-items: right;
    margin-right: 2rem;
    justify-content: flex-end;
    width:40%;
    i {
      color:  red;
       font-size: 1.5rem;
    }
   }
  li {
    

  }
  }
  
  }
  }

      }
      .json {
        width: 100%;
        height: 20rem;
   
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   margin-bottom: 2rem;
   .head {
    display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: left;
   width: 90%;
   font-weight: 1000;
   }
   code {
    width: 90%;
        height: 15rem;
        line-height: 1.6;
         word-spacing:0.5;
         font-size: 1.5rem;;
   }
        

      }

      .loading {

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
       
        img {
          width: 2rem;
        }
      }

      .modal {
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 2%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  .modal-content {
    position: relative;
  background-color: #fefefe;
  margin: auto;
  margin-top:10rem;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  height:20%;
  border-radius:10px;
  min-height:10rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    .text {
         font-size:1.5rem; 
    }
    .btn {
        width:40%;
        display:flex;
        justify-content:space-evenly;
        button {
            font-size:1.2rem;
            padding:0.3rem;
            
    background: #268EC7;
    color:white

        }
        
        
         
    }
  }
  }
  
}

@media (max-width: 767px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
margin-top: 1rem;;
  flex-direction: column;
  .flex {
   
          width: 95%;
         
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;
          
          .flex-1 {
            width: 100%;
          height: 25rem;
            margin-bottom: 4rem;
          
            border-radius: 0.5rem;
  display: flex;

  align-items: center;;
  justify-content: space-evenly;
  flex-direction: column;
   background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
   
   .top{
    display: flex;

align-items: center;;
justify-content: space-evenly;
flex-direction: column;
height:  95%;
width: 95%;

.left {
    display: flex;

align-items: center;;
justify-content: space-evenly;
flex-direction: column;
height:  100%;
width: 100%;

.left-top {
    display: flex;
 width: 95%;
align-items: left;
justify-content: space-evenly;

li {
    width: 100%;
    display: flex;

justify-content: space-evenly;
flex-direction: column;

span:nth-child(1) {
    color: #797979;
    font-size:0.9rem;

}
span:nth-child(2) {
    color:#268EC7;
    font-weight: 900;
}
}
i {
  margin-right: 1rem;
    font-size: 2rem;;
padding:0.5rem;
padding-top: 0.7rem;
padding-bottom: 0.7rem;
    background:#268EC7;
    border-radius: 50%;
    color: white;

}

}
.left-bottom {
    display: flex;
 width: 90%;
 height: 50%;
align-items: left;
justify-content: space-evenly;
flex-direction: column;
li {
    width: 100%;
    list-style: none;
    align-items: left;
    display: flex;
justify-content: space-between;
h4 {
    font-weight: 900;
}

}
}
}

.right {
    display: flex;

align-items: center;
justify-content: center;
flex-direction: column;
height:  100%;
width: 49%;

span {
  text-align: center;
}

}
   }
 
    
}

          .flex-2 {
             
           margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;;
  justify-content: center;
  flex-direction: column;
 width: 100%;
  .notifications {
    height: 25rem;
     background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;;
  justify-content: center;
  flex-direction: column;
  .head {
      height: 15%;
     
      width: 90%;
      display: flex;
  justify-content: center;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-family: Montserrat-Bold;
  }

  }

  .alert {
    height: 90%;
     
      width: 90%;
      display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  flex-direction: column;
  ::-webkit-scrollbar {
  width: 0.5em;
}
 
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
::-webkit-scrollbar-thumb {
  background-color: darkgrey;

}
.img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 2rem;;
  }
}
  li {
    margin-top: 0.5rem;
margin-bottom: 0.5rem;
      list-style: none;
      width: 100%;
      display: flex;
      justify-content: space-around;
      height: 4rem;;
     ;
      .i {
          width: 15%;
          display: flex;
      justify-content: center;
      align-items: center;
     border-radius: 0.2rem;;
      background-color: orange;
      i {
          color:white;
          
      }
      }
      span {
        width: 80%;
        display: flex;
      justify-content: space-evenly;
  
      flex-direction: column;
      h5 {
          line-height: 1.6;
           font-size: 0.8rem;;
           font-family: Montserrat-Bold;
      }
      }
      
  }
  }

  }
 
  
          }

      }

      .users {
        display: none;
        width: 95%;
     
          margin-bottom: 5rem;
         
      flex-direction: column;
         justify-content: space-evenly;
  

    display: flex;
  .left {
    height: 15rem;
    margin-bottom:1rem;
    border-radius:1rem;
   width: 95%;

    background-color:  ${props => props.theme.colors.background};
   box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
   display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   .head {
    display: flex;
  justify-content: space-between;
  align-items: center;
 
  width: 90%;
  height: 15%;
 
  }
  .data {
    display: flex;
  justify-content: flex-start;
 
  flex-direction: column;
    
    align-items: center;
  width: 90%;
  height: 85%;
 
  
  form {

    width: 100%;
    
    display: flex;
  justify-content:space-around;
  flex-direction: column;
  height: 100%;
  
  
.input-field {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  
  width:100%;
  height: 50%;
  .field {
    display: flex;
    justify-content: center;
    flex-direction: column;
 width: 48%;
 input {
   height: 2rem;
   border: 1px solid #ECE9F1;
box-sizing: border-box;
border-radius: 4px;
 }
 #active {
  border: 1px solid red;
 }
 label {
   margin-bottom: 0.5rem;
 }
  }
}

.btn {
  display: flex;
  justify-content: flex-end;
height: 30%;
button {
margin-top: 2rem;
  color:white;
  background: #268EC7;
border-radius: 10px;
width: 20%;
height: 30%;
}
}

   
  
  }

  ul {
 
    height: 3rem;
    display: flex;
    align-items: center;
   border: 1px solid #EBEFF2;

    justify-content: flex-start;
    li:nth-child(2) {
     color: #2C7641; 
     display: flex;
    align-items: center;
   margin-left: 0.8rem;
    justify-content: center;
    width:30%;
   }
   li:nth-child(1) {
    margin-left: 2rem;
    display: flex;
    align-items: center;
   
    justify-content: flex-start;
    img {
      width: 2rem;

    }
    width:30%;
   }
   li:nth-child(3) {
    display: flex;
    align-items: right;
    margin-right: 2rem;
    justify-content: flex-end;
    width:40%;
    i {
      color:  red;
       font-size: 1.5rem;
    }
   }
  li {
    

  }
  }
  
  }
  }
  .right {
    border-radius:1rem;
   width: 95%;
   height: 15rem;
    background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
  
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .head {
    display: flex;
  justify-content: space-between;
  align-items: center;
 
  width: 90%;
  height: 15%;
  button {
    color:white;
    height: 70%;
    border: none;
    width: 30%;
    background: #268EC7;

  }
  }
    
  .data {
    display: flex;
  justify-content: flex-start;
 
  flex-direction: column;
 
  width: 100%;
  height: 85%;

  .data-top {
    margin-left: 2rem;
    width: 45%;
  
    display: flex;
  justify-content:space-between;
  height: 9%;
  span {
    color: #797979;

  }
   
  
  }

  ul {
 
    height: 3rem;
    display: flex;
    align-items: center;
   border: 1px solid #EBEFF2;

    justify-content: flex-start;
    li:nth-child(2) {
     color: #2C7641; 
     display: flex;
    align-items: center;
   margin-left: 0.8rem;
    justify-content: center;
    width:30%;
   }
   li:nth-child(1) {
    margin-left: 2rem;
    display: flex;
    align-items: center;
   
    justify-content: flex-start;
    img {
      width: 2rem;

    }
    width:30%;
   }
   li:nth-child(3) {
    display: flex;
    align-items: right;
    margin-right: 2rem;
    justify-content: flex-end;
    width:40%;
    i {
      color:  red;
       font-size: 1.5rem;
    }
   }
  li {
    

  }
  }
  
  }
  }

      }
      .json {
        width: 100%;
        height: 20rem;
   
   display:flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   margin-bottom: 2rem;
   .head {
    display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: left;
   width: 90%;
   font-weight: 1000;
   }
   code {
    width: 90%;
        height: 15rem;
        line-height: 1.6;
         word-spacing:0.5;
         font-size: 1.5rem;;
   }
        

      }
      .loading {

display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 400px;

img {
  width: 2rem;
}
}

      .modal {
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 2%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  .modal-content {
    position: relative;
  background-color: #fefefe;
  margin: auto;
  margin-top:10rem;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  height:20%;
  border-radius:10px;
  min-height:10rem;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    .text {
         font-size:1.5rem; 
    }
    .btn {
        width:40%;
        display:flex;
        justify-content:space-evenly;
        button {
            font-size:1.2rem;
            padding:0.3rem;
            
    background: #268EC7;
    color:white

        }
        
        
         
    }
  }
  }
  
}

  `