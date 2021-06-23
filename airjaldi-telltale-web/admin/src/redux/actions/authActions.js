import axios from "axios";

import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

import { ToastContainer, toast } from 'react-toastify';
import { setAlert }  from './alertAction';
import api from "../utils/api";
// Register User
export const registerUser = (userData, Router) => dispatch => {
  axios
    .post("/api/register", userData)
    .then(res => Router.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  
    axios.post("/api/login", userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
   
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      setAuthToken(token);
  
      const decoded = jwt_decode(token);
 
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => toast.error(error.msg));
      }
    }
    );
};


export const UserloginUser = userData => dispatch => {
  
  axios.post("/api/login", userData)
  .then(res => {
    // Save to localStorage

    // Set token to localStorage
 
    const { token } = res.data;
    localStorage.setItem("jwtToken", token);

    setAuthToken(token);

    const decoded = jwt_decode(token);

    dispatch(setCurrentUser(decoded));
  })
  .catch(err => {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => toast.error(error.msg));
    }
  }
  );
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requestss
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));

  toast.error("Logout Succes")
};

export const sessionExpire = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requestss
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));

  toast.error("Session Expired")
};