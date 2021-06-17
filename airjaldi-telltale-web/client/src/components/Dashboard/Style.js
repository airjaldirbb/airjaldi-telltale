

  import styled from 'styled-components'




  export const Section = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 1035px) {
    
     

  width:100%;
  top:0%;
  

 
      transition: transform .3s;
      .flex {
          width: 100%;
         
          display: flex;
          justify-content: space-evenly;
          
          .flex-1 {
            width: 55%;
        
            margin-bottom: 6rem;
          
            border-radius: 0.5rem;
  display: flex;

  align-items: center;;
  justify-content: flex-start;
  flex-direction: column;
   background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
  .head {
      height: 10%;
     
      width: 90%;
      display: flex;

  align-items: left;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-family: Montserrat-Bold;
  }

  }        

  .zone {
      height: 10%;
     
      width: 90%;
      display: flex;

  align-items: center;
  justify-content: space-around;

  #active {
    font-family: Montserrat-Bold;
    color: ${props => props.theme.colors.blue}; 

  }
  li {
      list-style: none;
      font-size: 1.4rem;
  }

  }        

  .not-found {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30rem;
      h2 {
        font-family: Montserrat-Bold;
      }
      img {
        width: 2rem;;
      }
  }

  .zone-city {
    height: 25rem;
    cursor: pointer;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: space-evenly;
    .tower {
    
      margin-top: 2rem;
      margin-bottom: 3rem;
        width: 48%;
       
        display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 45%;
 
  border-radius: 0.5rem;
   i {
    cursor: pointer;
       font-size: 4rem;;
       color: ${props => props.theme.colors.blue}; 
   }
    ul {
        width: 100%;
        display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .net_name {
        font-family: Montserrat-Bold;
        font-size: 1.1rem;
    }
    li {
        font-size: 0.9rem;
    }

    li:nth-child(3){
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
      color: #637381;

    }
    li:nth-child(2){
     padding-top: 0.2rem;
      color: #637381;

    }


    }
   
   button {
       width: 50%;
   padding: 0.5rem;
       background-color: white;
       border: 1px solid  ${props => props.theme.colors.blue}; 
       font-family: Montserrat-Bold;
       color:  ${props => props.theme.colors.blue}; 
    }
    
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
    height: 30rem;
     background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
 
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
  .network {
    height: 30rem;
 
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    .tower {
        width: 48%;
       
        display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 45%;
     background-color:  ${props => props.theme.colors.background};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
   i {
       font-size: 4rem;;
       color: ${props => props.theme.colors.blue}; 
   }
    ul {
        width: 100%;
        display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
   

    }
    li:nth-child(1) {
        font-family: Montserrat-Bold;
        font-size: 1.5rem;
    }
    }
  }

  
          }

      }
 
  }

  @media (max-width: 767px) {
    
     

    width:100%;
    top:0%;
    
  
   
        transition: transform .3s;
        .flex {
            width: 100%;
           margin-top: 1rem;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: center;
            
            .flex-1 {
              width: 95%;
          
              margin-bottom: 3rem;
            
              border-radius: 0.5rem;
    display: flex;
  
    align-items: center;;
    justify-content: flex-start;
    flex-direction: column;
     background-color:  ${props => props.theme.colors.background};
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
    .head {
        height: 10%;
        align-items: center;
        width: 90%;
        display: flex;
  
    align-items: left;
    justify-content: center;
    flex-direction: column;
    h3 {
      padding-top: 1rem;
      padding-bottom: 1rem;
      text-align: center;
      font-family: Montserrat-Bold;
    }
  
    }        
  
    .zone {
        height: 10%;
       
        width: 90%;
        display: flex;
  
    align-items: center;
    justify-content: space-around;
  
    #active {
      font-family: Montserrat-Bold;
      color: ${props => props.theme.colors.blue}; 
  
    }
    li {
        list-style: none;
        font-size: 1.4rem;
    }
  
    }        
  
    .not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30rem;
        h2 {
          font-family: Montserrat-Bold;
        }
        img {
          width: 2rem;;
        }
    }
  
    .zone-city {
   
      margin-top: 1rem;
  
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      justify-content: flex-start;
      align-items: space-evenly;
      .tower {
        margin-top: 1rem;
        margin-bottom: 2rem;
          width: 95%;
         
          display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      height: 45%;
   
    border-radius: 0.5rem;
     i {
         font-size: 4rem;;
         color: ${props => props.theme.colors.blue}; 
     }
      ul {
          width: 100%;
          display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      .net_name {
          font-family: Montserrat-Bold;
          font-size: 1.1rem;
      }
      li {
          font-size: 0.9rem;
      }
  
      li:nth-child(3){
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        color: #637381;
  
      }
      li:nth-child(2){
       padding-top: 0.2rem;
        color: #637381;
  
      }
  
  
      }
     
     button {
         width: 50%;
     padding: 0.5rem;
         background-color: white;
         border: 1px solid  ${props => props.theme.colors.blue}; 
         font-family: Montserrat-Bold;
         color:  ${props => props.theme.colors.blue}; 
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
   width: 95%;
    .notifications {
      height: 30rem;
       background-color:  ${props => props.theme.colors.background};
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
   
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
        height: 3.5rem;;
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
          width: 73%;
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
    .network {
      height: 30rem;
   
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
      align-items: space-between;
      .tower {
          width: 48%;
         
          display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      height: 45%;
       background-color:  ${props => props.theme.colors.background};
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
     i {
         font-size: 4rem;;
         color: ${props => props.theme.colors.blue}; 
     }
      ul {
          width: 100%;
          display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
     
  
      }
      li:nth-child(1) {
          font-family: Montserrat-Bold;
          font-size: 1.5rem;
      }
      }
    }
  
    
            }
  
        }
   
    }
 
  `