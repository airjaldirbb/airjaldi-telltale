

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
  flex-direction: column;
  position: relative;

  .picker {
      position:absolute;
  display:  flex;
  justify-content: center;
    top: -5rem;
    right: 4rem;
    border: 1px solid #ECE9F1;
    label {
        font-family: Montserrat-Bold;
        padding-left: 1rem;
    }
    i {
        padding:0.5rem;
        font-size: 1.5rem;
    }
    input {
        border: none;
        font-size: 1.1rem;
        color: #268EC7;

}
    }

    .notFound {
        display: flex;
        justify-content: center;
           align-items: center;
           height: 400px;
           width: 100%;
           h2 {
           font-family: Montserrat-Bold;
           }
    }
}
  
@media (max-width: 787px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  position: relative;

  .picker {
 height: 10rem;
      position:absolute;
  display:  none;
  justify-content: center;
    
    border: 1px solid #ECE9F1;
    label {
        font-family: Montserrat-Bold;
        padding-left: 1rem;
    }
    i {
        padding:0.5rem;
        font-size: 1.5rem;
    }
    input {
        border: none;
        font-size: 1.1rem;
        color: #268EC7;

}
    }

    .notFound {
        display: flex;
        justify-content: center;
           align-items: center;
           height: 400px;
           width: 100%;
           h2 {
           font-family: Montserrat-Bold;
           }
    }
}


  `