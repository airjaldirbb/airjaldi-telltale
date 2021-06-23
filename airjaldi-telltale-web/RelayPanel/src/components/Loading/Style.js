import styled from 'styled-components'



export const Section = styled.section`
   display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   @media (min-width: 1025px) {
 
   .fixed {
    position: fixed; /* Stay in place *
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 5%;
    top: 10%;    left: 5%;
    top: 10%;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
/* Black w/ opacity */
  
  .wrapper {
      display:flex;
      justify-content:center;
      align-items:center;
    margin-top:10rem;
    img {
      width:3rem;
    }
  }
   }
   }
   
   @media (min-width: 768px) and (max-width: 1034px) {
   .flex {
    display:flex;
   justify-content:center;
   width:100%;
   height:100%;
   .flex-1 {
     margin-top:7vh;
   }
   
  
   .flex-2 {
    margin-top: 15vh;
    width: 100%;
    height: 80vh;
    
   
   }
   
   .fixed {
    position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
 
  }
  .wrapper {
      display:flex;
      justify-content:center;
      align-items:center;
    margin-top:10rem;
    img {
      width:6rem;
    }
  }
   }
   }
 
   @media (max-width: 1025px) {
 
 .fixed {
  position: fixed; /* Stay in place *
z-index: 1; /* Sit on top */
padding-top: 100px; /* Location of the box */

  top: 10%;   

width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
/* Black w/ opacity */

.wrapper {
    display:flex;
    justify-content:center;
    align-items:center;
  margin-top:10rem;
  img {
    width:2rem;
  }
}
 }
 }
`