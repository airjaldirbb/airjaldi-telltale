

  import styled from 'styled-components'




  export const Section = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 1281px) {
    display:flex;
justify-content:space-between;
width: 100%;
height:50rem;
flex-direction:column;
align-items: center;


.grid {
    display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     width:100%;
     height:10%;
     align-items: center;
      position: relative;
   
      .add-users {
        top:-2rem;
        right: 0;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 17%;
        height: 70%;
        background: #ECE9F1;
        cursor: pointer;
  i {
color: #5B5B5B;
font-size: 1.4rem;

  }
  span {
    font-family: Montserrat-Bold;
    background: ${props => props.theme.colors.brown};
  }
    }
    
     .head  {
       width:90%;
         height:100%;
       
         display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     .head-1 {
       height: 50%;
         width:90%;
         align-items:left;
         font-size:1.7rem;
         h2 {
            color:${props => props.theme.colors.blue};
           
         }
     }
  
     .head-2{
  
        display:flex;
    justify-content:space-between;
     align-items:center;
  width:90%;
  height:50%;
  h2 {
    font-family: Montserrat-Bold;
            font-family:1000;
       position: relative;
    font-size:1.9rem;
      cursor: pointer;
      .dropdown-content {
          display:none;
  position: absolute;
 
  width:100%;
  top:2rem;
  left:0;
 opacity:0.9;
  z-index: 1;
  top: 9.5%;
  justify-content:flex-start;
  .content {
     display:flex;
     justify-content:flex-start;
     width: 38%;
   margin-top:0.4rem;
   
   
     .list {
       
        width:100%;
        height:100%;
        display:flex;
        justify-content:flex-start;
         
        flex-direction:column;
        align-items:center;
        margin-top:1.3rem;
        span {
          background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24);
            
          text-align:left;
           font-weight: normal;
           width:12rem;
            text-align:left;
           text-transform:uppercase;
           font-size:1.2rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           align-items:center;
           color:black;
         
           height:4rem;
           .point {
       
           position: absolute;
          
     display:none;
         }
          
        }
        span:hover {
           border-bottom: 2px solid ;
        }
      
      
     }
     
  }
 
        }
        #north {
            margin-left:30%;
        }
        #east {
            margin-left:30%;
        }
      
     
    
    
    
  }
  h2:hover .dropdown-content {
          display:flex;
          z-index:1000;
      }
 
    
     }
     }
    
}

.map {
  width: 90%;
  height: 85%;
   display: flex;
   justify-content: center;
   img {
 
     height: 100%;
   }
}
   
    
  
}


@media (max-width: 767px) {
    display:flex;
justify-content:space-between;
width: 95%;
height:50rem;
flex-direction:column;
align-items: center;



.grid {
  margin-top: 5rem;
    display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     width:100%;
     height:10%;
     align-items: center;
      position: relative;
   
      .add-users {
        top:-4rem;
        right: 0;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 40%;
        height: 70%;
        background: #ECE9F1;
        cursor: pointer;
  i {
color: #5B5B5B;
font-size: 1.4rem;

  }
  span {
    font-family: Montserrat-Bold;
    background: ${props => props.theme.colors.brown};
  }
    }
    
     .head  {
       width:100%;
         height:100%;
       
         display:flex;
    justify-content:center;
     align-items:center;
     flex-direction:column;
     .head-1 {
       height: 50%;
         width:90%;
         align-items:center;
       
         h2 {
           text-align: center;
            color:${props => props.theme.colors.blue};
           
         }
     }
  
     .head-2{
  
        display:flex;
    justify-content:space-between;
     align-items:center;
  width:100%;
  height:50%;
  h2 {
    font-family: Montserrat-Bold;
            font-family:1000;
       position: relative;
    
      cursor: pointer;
      .dropdown-content {
          display:none;
  position: absolute;
 
  width:100%;
  top:2rem;
  left:0;
 opacity:0.9;
  z-index: 1;
  top: 9.5%;
  justify-content:flex-start;
  .content {
     display:flex;
     justify-content:flex-start;
     width: 38%;
   margin-top:0.4rem;
   
   
     .list {
       
       
        height:100%;
        display:flex;
        justify-content:flex-start;
         
        flex-direction:column;
        align-items:center;
        margin-top:1.3rem;
        span {
          background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24);
            
          text-align:left;
           font-weight: normal;
           width:12rem;
            text-align:left;
           text-transform:uppercase;
           font-size:1.2rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           align-items:center;
           color:black;
         
           height:4rem;
           .point {
       
           position: absolute;
          
     display:none;
         }
          
        }
        span:hover {
           border-bottom: 2px solid ;
        }
      
      
     }
     
  }
 
        }
        #north {
            margin-left:30%;
        }
        #east {
            margin-left:30%;
        }
      
     
    
    
    
  }
  h2:hover .dropdown-content {
          display:flex;
          z-index:1000;
      }
 
    
     }
     }
    
}

.map {
  width: 90%;
  height: 85%;
   display: flex;
   justify-content: center;
   img {
   width: 100%;
   height: 62%;
   }
}
   
    
  
}
  `