

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


table {
    width: 100%;
}
h1 {
    font-family: Montserrat-Bold;
}
tr {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

#img {
  width: 5;
  display: flex;
    justify-content: center;
    align-items: center;
    
    text-align: left;
    img {
        width: 2rem;;
    }
   
}

#con {
    margin-left: 1.5rem;;
    margin-right: 1rem;
     font-size:0.9rem;
}

th:nth-child(3){
    color: #637381;
    font-size: 0.7rem;
}
 
    
  
}

@media (max-width: 767px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;;

margin-top: 1rem;
table {
    width: 95%;
}
h1 {
    font-family: Montserrat-Bold;
}
tr {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: left;
line-height: 1.2;
}

#img {
  width: 5;
  display: flex;
    justify-content: center;
    align-items: center;
    
    text-align: left;
    img {
        width: 2rem;;
    }
   
}

#con {
    margin-left: 1.5rem;;
    margin-right: 1rem;
     font-size:0.9rem;
}

th:nth-child(3){
    color: #637381;
    font-size: 0.7rem;
}
 
    
  
}
  `