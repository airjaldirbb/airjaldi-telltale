import logo from './logo.svg';
import './App.css';
import Loadable from 'react-loadable';
import Reports from './components/Reports/Reports'
import { Section } from './components/comman/Style'
import Network from './components/Network/Network'
import { Provider } from "react-redux";
import store from "./redux/store";
import { setCurrentUser , sessionExpire } from './redux/actions/authActions';
import React, { Fragment, useEffect , useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GoogleFonts } from "next-google-fonts";
 import { lightTheme, darkTheme }  from './theme/colors';
 import { ReactQueryDevtools } from 'react-query/devtools'
 import GlobalFonts from './theme/theme';
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import setAuthToken from './redux/utils/setAuthToken';
 import { QueryClient, QueryClientProvider } from 'react-query'
 import { Hydrate } from 'react-query/hydration'
 import jwt_decode from "jwt-decode";
  import Dash from './components/Dash'
  import Login from './components/Auth/Login'
 import Activity from './components/Activitiy/Activity'
  import PrivteRoute from './components/private-route/PrivateRoute'
  import Profile from './components/NetworkProfile/Profile'
import Dashborad from './components/Dashboard/Dashboard'
import Users from './components/Users/Users'
import Relay from './components/ReplayProfile/Relay'
import AllRely from './components/AllRelays/Profile'
import Settings from './components/Setting/Setting'
import UpdatePassword from './components/password/password'

  function App() {
  if (localStorage.jwtToken) {
    // Set auth token header auth
    if (localStorage.jwtToken) {
    const token = localStorage.getItem("jwtToken");
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in 
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(sessionExpire());
  
      // Redirect to login
      window.location.href = "./login";
    }
  }

  }
 
  const [theme, themeToggler] = useState(lightTheme);

  // useEffect( async  () => {
  //   var d = new Date();
  //   console.log(d.getHours());
  //   if(d.getHours() > 17 ){
  //    await themeToggler(darkTheme)
  //   console.log(d.getHours() , "night")
  //   }
  //   else if (d.getHours() < 6){
  //     await themeToggler(darkTheme)
  //     console.log(d.getHours() , "night")
  //   }
  //   else {
  //     await    themeToggler(lightTheme)
  //     console.log(d.getHours() , "Day")
  //   }
  
  // }, [])

 
 
  const queryClient = new QueryClient();
  return (
 <>
    <ToastContainer />
    <Provider store={store}>
  <ThemeProvider theme={theme}>
 
    <GlobalFonts/>
   
    <QueryClientProvider client={queryClient}>
       <Hydrate>
       <Router>
       <Switch>
       <PrivteRoute  exact path="/network" component={Network} />
       <PrivteRoute  exact path="/" component={Dashborad} />
       <PrivteRoute  exact path="/" component={Dashborad} />
       <Route exact path="/login" component={Login} />
       <PrivteRoute  exact path="/activities" component={Activity} />
       <PrivteRoute  exact path="/network/:id" component={Profile} />
       <PrivteRoute  exact path="/network/:id/:relay" component={Relay} />
         <PrivteRoute  exact path="/users" component={Users} />
         <PrivteRoute  exact path="/allrelays" component={AllRely} />
       <PrivteRoute  exact path="/reports" component={Reports} />
       <PrivteRoute  exact path="/setting" component={Settings} />
       <PrivteRoute  exact path="/update-password" component={UpdatePassword} />
       </Switch>
       </Router>
       {/* <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   */}
  
 </Hydrate>

 {/* <ReactQueryDevtools  /> */}
 </QueryClientProvider>

  </ThemeProvider>
</Provider>
   </>
  
  );
}

export default App;
