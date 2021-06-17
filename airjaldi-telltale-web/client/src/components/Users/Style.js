

  import styled from 'styled-components'




  export const Section = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 1281px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .flex {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      background-color:  ${props => props.theme.colors.background};
box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24);
border-radius: 15px;
height: 40rem;

.top {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 10%;
    align-items: center;
    .head {
        h2 {
            font-family: Montserrat-Bold;
            color: ${props => props.theme.colors.blue};
        }
    }

    .add-users {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 20%;
        height: 70%;
        background-color:  ${props => props.theme.colors.dark2};
  i {
color: #5B5B5B;
font-size: 1.4rem;

  }
  span {
    font-family: Montserrat-Bold;
    background: ${props => props.theme.colors.brown};
  }
    }
}

.data {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    height: 80%;
    flex-direction: column;
    align-items: center;
    .data-head {
        display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 10%;
    align-items: center; 
    background-color:  ${props => props.theme.colors.dark2};
border-radius: 8px;
li {
    list-style: none;
}
li:nth-child(1) {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
li:nth-child(2) {
    width: 17%;
}
li:nth-child(3) {
    width: 40%;
    
}
li:nth-child(4) {
    width: 15%;
}
li:nth-child(5) {
    width: 20%;
}
    }

    ol {
        display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 10%;
    align-items: center; 

border-radius: 8px;
li {
    list-style: none;
}
li:nth-child(1) {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 2rem;
    }
}
li:nth-child(2) {
    width: 17%;
}
li:nth-child(3) {
    width: 40%;
}
li:nth-child(4) {
    
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  
    span {
     padding: 0.5rem;
    background: #2BC271;

      color:white;
      font-family: Montserrat-Bold;
    }
   
}
li:nth-child(5) {
    
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  
  
    span {
     padding: 0.5rem;
    

      color:white;
      font-family: Montserrat-Bold;
    }
    #relay {
        background: #268EC7;

    }
    #delete {
        background: #FF4F4D;

    }
   
}
    }
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

  .flex {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      background-color:  ${props => props.theme.colors.background};
box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24);
border-radius: 15px;
height: 30rem;

.top {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 10%;
    align-items: center;
    .head {
        h2 {
            font-family: Montserrat-Bold;
            color: ${props => props.theme.colors.blue};
        }
    }

    .add-users {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
        height: 70%;
        background: #ECE9F1;
  i {
color: #5B5B5B;
font-size: 1.4rem;

  }
  span {
    font-family: Montserrat-Bold;
    background: ${props => props.theme.colors.brown};
  }
    }
}

.data {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    height: 80%;
    flex-direction: column;
    align-items: center;
    .data-head {
        display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 10%;
    align-items: center; 
    background: #F4F6F8;
border-radius: 8px;
li {
    list-style: none;
}
li:nth-child(1) {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
li:nth-child(2) {
    width: 30%;
}
li:nth-child(3) {
    width: 40%;
    display: none;
}
li:nth-child(4) {
    width: 40%;
}
li:nth-child(5) {
    width: 20%;
    display: none;
}
    }

    ol {
        display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 10%;
    align-items: center; 

border-radius: 8px;
li {
    list-style: none;
}
li:nth-child(1) {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 2rem;
    }
}
li:nth-child(2) {
    width: 30%;
}
li:nth-child(3) {
    width: 30%;
    display: none;
}
li:nth-child(4) {
    
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  
    span {
     padding: 0.5rem;
    background: #2BC271;

      color:white;
      font-family: Montserrat-Bold;
    }
   
}
li:nth-child(5) {
    display: none;
    width: 20%;
    height: 100%;
    
    justify-content: space-around;
    align-items: center;
  
  
    span {
     padding: 0.5rem;
    

      color:white;
      font-family: Montserrat-Bold;
    }
    #relay {
        background: #268EC7;

    }
    #delete {
        background: #FF4F4D;

    }
   
}
    }
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