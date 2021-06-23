import React  , {useState} from 'react'
import { Section} from './Style'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import browser from 'browser-detect';

import { loginUser } from "../../redux/actions/authActions";
function Login({loginUser , auth:{isAuthenticated}}) {
    const history = useHistory();
    const result = browser();
    const { register, handleSubmit, watch, errors } = useForm();
    if(isAuthenticated){
        history.push("/")
    }
  const onSubmit = data => {
    const data1 = {
      message: `  ${result.os}
      &nbsp;
      ${result.name}
      ${result.version}`,
      ...data
    } 
    
    loginUser(data1);

  }
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
    return (
        <Section>
            <div className="flex" >
            <div className="flex-1" >
                
                
                </div>
                <div className="flex-2" >
                
                
                </div>
                

                <div className="login-box" >
                    <div className="logo" >
                        <img src={'https://res.cloudinary.com/airjaldi/image/upload/v1622887301/telltale-airjaldi-logo_qtahbx.png'} ></img>
                    </div>
                    <div className="login-form" >
  <div className="head" >
      <h2>Login</h2>
     
          
           </div>

           <form onSubmit={handleSubmit(onSubmit)}>

  
  <div    className="input-field" >
 <div className="left" >

 <i className="far fa-envelope"></i>
 </div>

 <div className="right" >
  <label>Your Email</label>
  <input  {...register("email", { required: true })} type="email" placeholder="Enter Email" ></input>
     
 </div>

  </div>
  
<div   className="input-field" >
<div className="left" >
<i class="fas fa-lock"></i>
</div>
<div className="right" >
  <label>Password</label>
  <input  {...register("password", { required: true })} autocomplete="off" type={passwordShown ? "text" : "password"} placeholder="Enter Password" ></input>
  
  {passwordShown ? <i  id='ab' class="fas fa-eye-slash" onClick={togglePasswordVisiblity}></i> : <i  id="ab" class="far fa-eye" onClick={togglePasswordVisiblity}></i>}
 
  
 </div>
</div>
<button>Login</button>

  </form>

                    </div>
                </div>
                 
                 
                 
                 </div>
        </Section>
    )
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);
