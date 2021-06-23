

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
  flex-direction: column;

      


  .coment {
    margin-top: 5rem;
    margin-bottom: 3rem;
      
    width: 100%;
    height: 40rem;
      
  display: flex;
  justify-content: space-between;


  flex-direction: column;
   .comment-list {
      width: 100%;
      height: 65%;
      background: #FFFFFF;
    box-shadow: 0px 12px 24px rgb(0 0 0 / 15%);
      display: flex;
  justify-content: flex-start;
align-items: center;
overflow: auto;
  flex-direction: column;
  .box {
      padding: 1rem;;
    
      background: #FFFFFF;
    box-shadow: 0px 12px 24px rgb(0 0 0 / 15%);
      margin-top: 1rem;
      width: 90%;
      display: flex;
      justify-content: space-evenly;
      .img {
          height: 100%;
          width: 8%;
          
          display: flex;
          justify-content: center;
          img{
              height: 90%;
              width: 50%;
          }


      }
      ul {
        height: 100%;
          width: 90%;
        display: flex;
  justify-content: space-around;
align-items: left;

  flex-direction: column; 
  .date {
      margin-top: 0.3rem;;
      font-size: 0.7rem;
      color: #637381;

  }
  li:nth-child(1){
    font-size: 0.7rem;
    font-weight: 900;
  }
      }
  }
   }
  
   .btn {
    width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
  span {
      color: black;
  }
  button {
      background: #0085C5;
      height: 2rem;
      color:white
  }
      flex-direction: column;

   }


   .submit {
    width: 100%;
 
      display: flex;
      justify-content: center;
  span {
      color: black;
  }
  button {
      background: #0085C5;
      height: 2rem;
      color:white
  }
      flex-direction: column;

   }
  }
  
}

@media (max-width: 767px) {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

      


  .coment {
  
    margin-bottom: 3rem;
      
    width: 100%;
    height: 30rem;
      
  display: flex;
  justify-content: space-between;


  flex-direction: column;
   .comment-list {
      width: 100%;
      height: 65%;
      background: #FFFFFF;
    box-shadow: 0px 12px 24px rgb(0 0 0 / 15%);
      display: flex;
  justify-content: flex-start;
align-items: center;
overflow: auto;
  flex-direction: column;
  .box {
      padding: 1rem;;
    
      background: #FFFFFF;
    box-shadow: 0px 12px 24px rgb(0 0 0 / 15%);
      margin-top: 1rem;
      width: 90%;
      display: flex;
      justify-content: space-evenly;
      .img {
          height: 100%;
          width: 10%;
          
          display: flex;
          justify-content: center;
          img{
              height: 90%;
              width: 100%;
          }


      }
      ul {
        height: 100%;
          width: 85%;
        display: flex;
  justify-content: space-around;
align-items: left;

  flex-direction: column; 
  .date {
      margin-top: 0.3rem;;
      font-size: 0.7rem;
      color: #637381;

  }
  li:nth-child(1){
    font-size: 0.7rem;
    font-weight: 900;
  }
      }
  }
   }
  
   .btn {
    width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
  span {
      color: black;
  }
  button {
      background: #0085C5;
      height: 2rem;
      color:white
  }
      flex-direction: column;

   }


   .submit {
    width: 100%;
 
      display: flex;
      justify-content: center;
  span {
      color: black;
  }
  button {
      background: #0085C5;
      height: 2rem;
      color:white
  }
      flex-direction: column;

   }
  }
  
}

  `