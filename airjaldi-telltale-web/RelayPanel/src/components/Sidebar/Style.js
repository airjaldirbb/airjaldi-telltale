

  import styled from 'styled-components'




export const Section = styled.nav`
display:flex;
justify-content:center;
align-items:center;
@media (min-width: 1035px) {

    background: #FFFFFF;
box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
position:fixed;
height:100vh;
width:13%;
top:0%;

min-height:30rem;
z-index:1000;
    transition: transform .3s;
 .grid {

   
    
     display:flex;
     justify-content:flex-start;
      flex-direction:column;
      align-items:center;
    height:100%;
    width:100%;
   
    box-shadow: 0 0 10px #fff;

    .img {
          width: 100%;
          height: 7rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
              width: 90%;
          }
    }
.icon {
    width:100%;
    cursor: pointer;
    height:9%;
  
    display:flex;
     justify-content:flex-start;
   
      align-items:center;
      i {
          margin-left:5%;
          font-size:1.3rem;
          width:15%;
          color:black;
      }
      a {
        margin-left:2%;
          padding-top:0.5rem;
          color:black;
          font-size:0.9rem;
          text-align:center;
          text-transform:uppercase;
      }
      .dropdown-content {
        position: absolute;
        background-color: ${props => props.theme.colors.dark};
         display:none;
         justify-content:center;
         flex-direction:column;
         align-items:center;
  width:12rem;
  height:20rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
  right:-10rem;
  a {
   
    width:100%;
      height:14%;
  
  }
  a:hover {
    background-color:#637484;
    width:100%;
  }
      }
      
      .dropdown-content-1{
        position: absolute;
        background-color: ${props => props.theme.colors.dark};
         display:none;
         justify-content:center;
         flex-direction:column;
         align-items:center;
  width:12rem;
  height:10rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
  right:-10rem;
  a {
     
    width:100%;
      height:33%;
  
  }
  a:hover {
    background-color:#637484;
    width:100%;
  }
      }
}
.icon:hover  .dropdown-content {
          display:flex;
      }
      .icon:hover  .dropdown-content-1 {
          display:flex;
      }
.icon:hover {
    i {
    color: ${props => props.theme.colors.blue}; 
   }
   a {
    color: ${props => props.theme.colors.blue}; 
   }
   
 
}
#active {
 
 
   i {
    color: ${props => props.theme.colors.blue}; 
   }
   a {
    color: ${props => props.theme.colors.blue}; 
   }
   
 }
   
 }
}
@media (min-width: 768px) and (max-width: 1034px) {
 
    background-color: ${props => props.theme.colors.background};
position:fixed;
height:93vh;
width:10%;
min-height:50em;
box-shadow: 0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1);
    transition: transform .3s;
 .grid {
    
     display:flex;
     justify-content:flex-start;
      flex-direction:column;
   
    height:100%;
    width:100%;
    box-shadow: 0 0 10px #fff;
.icon {
    width:100%;
    cursor: pointer;
    height:9%;
    border: 1px solid  	#F0F0F0;
    display:flex;
     justify-content:center;
      flex-direction:column;
      align-items:center;
      i {
          font-size:1.3rem;
          color:#787878;
      }
      a {
          padding-top:0.5rem;
          color:#787878;
          font-size:0.9rem;
          text-align:center;
      }
}
#active {
    i {
        color:#686868;
    }
    a {
        color:#686868;
        font-weight:900;
    }
   
 }
   
 }
}

@media (max-width: 767px)  {
 display: none;
 background-color: ${props => props.theme.colors.background};
position:fixed;
height:93vh;
width:10%;
min-height:50em;
box-shadow: 0 3px 30px rgba(0,0,0,.1), 0 3px 20px rgba(0,0,0,.1);
 transition: transform .3s;
.grid {
 
  display:flex;
  justify-content:flex-start;
   flex-direction:column;

 height:100%;
 width:100%;
 box-shadow: 0 0 10px #fff;
.icon {
 width:100%;
 cursor: pointer;
 height:9%;
 border: 1px solid  	#F0F0F0;
 display:flex;
  justify-content:center;
   flex-direction:column;
   align-items:center;
   i {
       font-size:1.3rem;
       color:#787878;
   }
   a {
       padding-top:0.5rem;
       color:#787878;
       font-size:0.9rem;
       text-align:center;
   }
}
#active {
 i {
     color:#686868;
 }
 a {
     color:#686868;
     font-weight:900;
 }

}

}
}
`