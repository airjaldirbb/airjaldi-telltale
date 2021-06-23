

  import styled from 'styled-components'




  export const Section = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  @media (min-width: 1035px) {
    
    select {
      margin-top: 0.7rem;
        width: 20rem;
        font-family: Montserrat-Bold;
    }
    .css-2b097c-container {
    position: relative;
    box-sizing: border-box;
    width: 40rem;
    margin-top: 0.5rem;
}

.field {
  margin-top: 2rem;
  label {
    padding-bottom: 0.5rem;
    font-size: 1.3rem;
    font-family: Montserrat-Bold;

  }

}

.wrapper {
  width: 10rem;;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 2rem;;
  }
}

.picker {


height: 8rem;
display: flex;
justify-content: space-around;
align-items: center;

.label{
  height: 100%;
  width: 48%;
  
  height: 5rem;;
  display: flex;
justify-content: space-around;

flex-direction: column;
label {
  padding-bottom: 0.5rem;
    font-size: 1.3rem;
    font-family: Montserrat-Bold;

}
.cel {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
 
  input {
    width: 80%;
    height: 2rem;
    padding-left: 0.5rem;
  }
  i {
     font-size:1.3rem;;
     padding-top: 0.5rem;;
  }
}
}


}
.button {
  display: flex;
  height: 3rem;;
  justify-content: space-around;

}
button {
  height: 3rem;;
  border: none;
  color: white;
  background-color:  #0085C5;
  padding-left:1rem;
  padding-right:1rem;
  font-family: Montserrat-Bold;
}
 
 .notFound {
  display: flex;
  height: 5rem;;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-family: Montserrat-Bold;
  }
 } 
  }
  
  `