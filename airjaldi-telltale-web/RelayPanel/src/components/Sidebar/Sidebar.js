import React from 'react'
import { Section } from './Style'

import { logoutUser } from '../../redux/actions/authActions';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";



function Sidebar({logoutUser , auth:{isAuthenticated , user}}) {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/")  
    return (
        <Section>

            <div className="grid">

                <div className="img" >
                    <img src={'https://res.cloudinary.com/airjaldi/image/upload/v1621922035/logo_1_nzz4cs.png'} ></img>
                </div>  
                <div   id={splitLocation[1] === "" ? "active" : ""}  className="icon" >
                <i className="fas fa-signal"></i>
             <Link  to="/"  >Dashboard

</Link>
             </div>

                <div   id={splitLocation[1] === "network" ? "active" : ""}   className="icon" >
                <i className="fas fa-network-wired"></i>
             <Link  to="/network"  >network

</Link>
             </div>

          
            

           


          

             <div    className="icon" >
                <i className="fas fa-cog"></i>
             <Link  to="/"  >Settings

</Link>
             </div>

             <div    className="icon" >
                <i className="fas fa-sign-out-alt"></i>
             <Link  onClick={() => logoutUser() } >Logout

</Link>
             </div>

     
            </div>
            
        </Section>
    )
}



const mapStateToProps = state => ({
    auth: state.auth,
   
  });
  
export default connect(
    mapStateToProps,
    { logoutUser }
  )(Sidebar);
