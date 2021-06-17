import styled from 'styled-components'



export const Nav = styled.nav`
display:flex;
justify-content:center;
align-items:center;
z-index: 1;
@media (min-width: 1025px) {
 
min-height:5rem;
background-color:  ${props => props.theme.colors.background};
box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);

width:100%;
top:0;
 
 .flex {
     display:flex;
     justify-content:space-between;
  
      align-items:center;
    height:100%;
    width:100%;
  
   
     .left {
    
    width:20%;
    height:100%;
   
   display:flex;
     justify-content:center;
  
      align-items:center;
      width:7%;
    .wrapper {
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: relative;
 
  i {
 font-size :2rem;
 color:white;
  
  }
    }
    
     }
     .mid {
        width:20%;
    height:100%;
    display:flex;
    justify-content:flex-end;
      align-items:center;
       img {
           width:60%;
       }
     }
     .right {
        width:20%;
    height:100%;
     
    
    display:flex;
     justify-content:flex-end;
  
      align-items:center;
      .name {
        width:80%;
       
        height:100%;
        display:flex;
        justify-content:center;
      align-items:center;
      span {
        color:white;
        font-size:1.1rem;
      }
      }
   
      img {
        width:1.5rem;
        margin-left:1rem;
        margin-right:1rem;
      }
      
       i{
         font-size:1.5rem;
         margin-right:1rem;
         cursor: pointer;
         position:relative;
         color:white;
         h4{
          position: absolute;
    top: -43%;
    right: -24%;
    border: 1px solid;
    border-radius: 50%;
    padding: 0.2rem;
    background: black;
    color: white;
         }
        
       }
       .far {
        margin-right:0rem;
       }
     }
 }
   
   .flex-sm {
     display: none;
   }

}
@media (max-width: 767px) {
 

 
 width:100%;
 top:0;
  
  .flex {
     display: none;
  }

  .flex-sm {
     display:flex;
     justify-content:space-between;
     background:#0085C5;
 box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
      align-items:center;
    height:100%;
    width:100%;
    min-height:4rem;
  
   
     .left {
    
    width:20%;
    height:100%;
   
   display:flex;
     justify-content:center;
  
      align-items:center;
      width:15%;
     
    .wrapper {
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: relative;
 width: 100%;

  i {
 font-size :2rem;
 color:white;
  
  }
    }
    
     }
     .mid {
        width:30%;
    height:100%;
    display:flex;
    justify-content:flex-end;
      align-items:center;
       img {
         margin-top: 0.5rem;;
           width:100%;
       }
     }
     .set {
        width:70%;
    height:100%;
    display:flex;
    justify-content:flex-start;
      align-items:center;
       img {
         margin-top: 0.5rem;;
           width:100%;
       }
       color: white;
       font-size: 1.4rem;;
     }
     .right {
        width:20%;
    height:100%;
     
    
    display:flex;
     justify-content:flex-end;
  
      align-items:center;
      .name {
        width:80%;
       
        height:100%;
        display:flex;
        justify-content:center;
      align-items:center;
      span {
        color:white;
        font-size:1.1rem;
      }
      }
   
      img {
        width:1.5rem;
        margin-left:1rem;
        margin-right:1rem;
      }
      
       i{
         font-size:1.5rem;
         margin-right:1rem;
         cursor: pointer;
         position:relative;
         color:white;
         h4{
          position: absolute;
    top: -43%;
    right: -24%;
    border: 1px solid;
    border-radius: 50%;
    padding: 0.2rem;
    background: black;
    color: white;
         }
        
       }
       .far {
        margin-right:0rem;
       }
     }
 }
 .link {
  height: 100%;
width: 20rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #0085C5;
z-index: 1000;
  transition: 0.5s;
  padding-top: 60px;
  
       li {
        padding: 8px 8px 8px 32px;

  font-size:1.3rem;
  color: white;
  display: block;
  transition: 0.3s;
    
       
     }
     a {

       position: absolute;
    top: 0rem;
    right: 1rem;
    font-size: 4.5rem;
     }
      li:hover {
  color: #f1f1f1;
}
     }
 }
`
