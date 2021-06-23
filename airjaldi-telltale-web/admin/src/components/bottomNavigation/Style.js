

import styled from 'styled-components'



export const Fixed = styled.div`




@media (min-width: 1025px) {
  
  display:none;
 
}

@media (min-width: 768px) and (max-width: 1034px) {
 display:none;
  
}

@media  (max-width:767px) {
 
    position: fixed;
    width: 100%;
    bottom: 1rem;
    /* height: 2rem; */
    display: flex;
    justify-content: center;
    z-index: 990;
 .flex {
    display: flex;
   
    justify-content: center;
    background: black;
    box-shadow: 0 0 10px black;
    height: 4rem;
    width: 90%;
    border-radius: 2rem;
    background:#0085C5;
    .flex-1 {
        width:25%;
     
         display:flex;
         justify-content:center;
         flex-direction:column;
         color: #87CEFA;
         align-items: center;
         cursor: pointer;
         span {
             padding-top:5%;
             font-family: 'Raleway', sans-serif;

         }
    }

    #active {
       
        width:25%;
     
         display:flex;
         justify-content:center;
         flex-direction:column;
         color:white;
         align-items: center;
         span {
             padding-top:5%;
             font-family: 'Raleway', sans-serif;

         }
    
    }
 }
 



}
`
