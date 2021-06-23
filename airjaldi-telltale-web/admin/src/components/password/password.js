import React , {useState} from 'react';
import { Section } from './Style'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import api from '../../redux/utils/api';
import browser from 'browser-detect';
import { useHistory } from "react-router-dom";
function Password() {
  const result = browser();
    const router = useHistory();
    const {
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      criteriaMode: "all"
    });
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const [passwordShown2, setPasswordShown2] = useState(false);
    const togglePasswordVisiblity2 = () => {
      setPasswordShown2(passwordShown2 ? false : true);
    };
    const [passwordShown3, setPasswordShown3] = useState(false);
    const togglePasswordVisiblity3 = () => {
      setPasswordShown3(passwordShown3 ? false : true);
    };
     
    const onSubmit= async (data) => {
      const data1 = {
        message: `  ${result.os}
        &nbsp;
        ${result.name}
        ${result.version}`,
        ...data
      } 
           
        try {
            
     const res = await api.patch("/update-password", data1)
          
     await toast.success("Password Changed")
     await router.push("/setting")   
    }
    catch (err) {
        const errors = err.response.data

         toast.error(errors.password)
    }

     

    }

    
   
    return (
        <Section>
        <div class="mainDiv">
        <div class="cardStyle">
          <form  onSubmit={handleSubmit(onSubmit)} method="post" name="signupForm" id="signupForm">
            
            <img src="https://res.cloudinary.com/airjaldi/image/upload/v1621069161/unnamed_fyng5z.png" id="signupLogo"/>
            
            <h2 class="formTitle">
             Change Password
            </h2>
             
            <div class="inputDiv">
            <label class="inputLabel" for="password">Old Password</label>
            <input      {...register("oldpassword", { required: true })}   type={passwordShown ? "text" : "password"} id="password" name="oldpassword" required/>
          
            {passwordShown ? <i  id='ab' class="fas fa-eye-slash" onClick={togglePasswordVisiblity}></i> : <i  id="ab" class="far fa-eye" onClick={togglePasswordVisiblity}></i>}
         
          </div>

          <div class="inputDiv">
            <label class="inputLabel" for="password">New Password</label>
            <input  {...register("newpassword", { required: true })}   type={passwordShown2 ? "text" : "password"}id="password" name="newpassword" required/>
            {passwordShown2 ? <i  id='ab' class="fas fa-eye-slash" onClick={togglePasswordVisiblity2}></i> : <i  id="ab" class="far fa-eye" onClick={togglePasswordVisiblity2}></i>}
          </div>
            
          <div class="inputDiv">
            <label  class="inputLabel" for="confirmPassword">Confirm Password</label>
            <input {...register("confirmPassword", { required: true })}  type={passwordShown3 ? "text" : "password"} id="confirmPassword" name="confirmPassword"/>
            {passwordShown3 ? <i  id='ab' class="fas fa-eye-slash" onClick={togglePasswordVisiblity3}></i> : <i  id="ab" class="far fa-eye" onClick={togglePasswordVisiblity3}></i>}
          </div>
          
          <div class="buttonWrapper">
            <button type="submit" id="submitButton" onclick="validateSignupForm()" class="submitButton pure-button pure-button-primary">
              <span>Continue</span>
              <span id="loader"></span>
            </button>
          </div>
            
        </form>
        </div>
      </div>
      </Section>
    )
}

export default Password
