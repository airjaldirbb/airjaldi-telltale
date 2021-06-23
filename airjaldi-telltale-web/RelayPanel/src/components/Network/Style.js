

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

  .flex {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
     background-color:  ${props => props.theme.colors.background};
box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24);
border-radius: 15px;


.top {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 5rem;
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
    height: 4rem;
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
    width: 25%;
}
li:nth-child(4) {
    text-align: center;
    width: 40%;
}
li:nth-child(5) {
    text-align: center;
    width: 20%;
}
    }

    ul {
        display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 12rem;
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
}
li:nth-child(2) {
    width: 17%;
}
li:nth-child(3) {
    width: 25%;
}
li:nth-child(4) {
    
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  margin-top: 1rem;;
    span {
     padding: 0.5rem;
     padding-left: 1rem;
     padding-right: 1rem;
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
     padding-left: 2rem;
     padding-right: 2rem;
     background: #268EC7;
      color:white;
      font-family: Montserrat-Bold;
    }
   
   
}
    }
}
  }
    
  
}

@media (max-width: 787px) {
  
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
        display: none;
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
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
li:nth-child(2) {
    width: 17%;
}
li:nth-child(3) {
    width: 25%;
}
li:nth-child(4) {
    text-align: center;
    width: 40%;
}
li:nth-child(5) {
    text-align: center;
    width: 20%;
}
    }

    ul {
        margin-bottom: 2rem;
        display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 12rem;
  
    align-items: center;
    margin-top : 1rem ;
    margin-bottom: 1rem;
    ;

border-radius: 8px;
li {
    list-style: none;
}
li:nth-child(1) {
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    
}
li:nth-child(2) {
    width: 100%;
    text-align: center;
    font-family: Montserrat-Bold;
}
li:nth-child(3) {
    width: 100%;
    text-align: center;
}
li:nth-child(4) {
    
    width: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  margin-top: 1rem;;
    span {
     padding: 0.5rem;
     padding-left: 1rem;
     padding-right: 1rem;
    background: #2BC271;

      color:white;
      font-family: Montserrat-Bold;
    }
   
}
li:nth-child(5) {
  
    width: 20%;

    display: flex;
    justify-content: space-around;
    align-items: center;
  
  
    span {
     padding: 0.5rem;
     padding-left: 2rem;
     padding-right: 2rem;
     background: #268EC7;
      color:white;
      font-family: Montserrat-Bold;
    }
   
   
}
    }
}
  }
    
  
}
  `