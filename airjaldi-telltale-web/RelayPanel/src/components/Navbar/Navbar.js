import React , {useState} from 'react'
import { Nav} from './Style';

import { useHistory } from "react-router-dom";
import { logoutUser } from '../../redux/actions/authActions';
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";
function Navbar({logoutUser  }) {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
    const [ pop , setPop ] = useState(true)
   
    const [ length ,setlength ] = useState("none")
    const history = useHistory();
    const splitLocation = pathname.split("/")  
     console.log(splitLocation[3])
    return (
        <div>
             <Nav>

 
                <div className='flex' >

                <div className='left' >
                    <div onClick={() => this.props.clickme()} className="wrapper" >
                    <i className="fas fa-bars"></i>
                </div>

                
                </div>
            <div className='mid' >

              

                </div>

              
                <div className='right' >
   
   <div className='name' >

   <i className="fas fa-user-circle"></i>
 
 
      </div>

                <div className='wrapper' >
                    
             
                </div>
            <i  onClick={() => logoutUser() } className="fas fa-sign-out-alt"></i>  



                </div>
                </div>
                <div className='flex-sm' >
           

<div  style={{display:`${length}` }} className='link' >

  <li onClick={()  => history.push({
 pathname: '/',
}) }   >  Home</li>
  <li  
  onClick={()  => history.push({
   pathname: '/network',
}) }  >Network</li>



  <a href="javascript:void(0)" class="closebtn" onClick={() => setlength("none")}>&times;</a>
  <li onClick={logoutUser} >Logout</li>
 
  </div>


{splitLocation[1] === '' ?
(
    <>
{!pop ? 
      (

    <div className='left' >
    <div onClick={() => setPop(true)} className="wrapper" >
    <i class="fas fa-times"></i>
</div>


</div>
) 
: 
    (

        <div className='left' >
        <div onClick={() => setlength("block")} className="wrapper" >
        <i className="fas fa-bars"></i>
    </div>

    
    </div>
    )
}
</>
) :
(
    <div className='left' >
    <div onClick={() => history.goBack()} className="wrapper" >
    <i class="fas fa-arrow-left"></i>
</div>
</div>

)

}




{splitLocation[1] === '' ? 

(
    <div className='mid' >
            {splitLocation[1]}
            <img src={'https://res.cloudinary.com/airjaldi/image/upload/v1622887301/telltale-airjaldi-logo_qtahbx.png'} ></img>

                </div>
              
)
:
(
<>
{splitLocation[3] === undefined ? 
(
    <div className='set' >

    {splitLocation[1].charAt(0).toUpperCase() + splitLocation[1].slice(1)}
    
                    </div>
):
(
    <div className='set' >

    {splitLocation[3].charAt(0).toUpperCase() + splitLocation[3].slice(1)}
    
                    </div>
)

}
  

     </>         
)

}
    



                <div className='right' >
   
  

              
        {/* <i  onClick={() => logoutUser() } className="fas fa-sign-out-alt"></i>  */}



                </div>
                </div>
           
           
           
            </Nav>
        </div>
    )
}



const mapStateToProps = state => ({
    auth: state.auth,
   
  });
  
export default connect(
    mapStateToProps,
    { logoutUser }
  )( Navbar);