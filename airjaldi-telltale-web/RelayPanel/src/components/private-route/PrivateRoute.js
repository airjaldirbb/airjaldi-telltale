import React , {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Section} from '../comman/Style'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Sidebar/Sidebar'
import BottomNavigator from '../bottomNavigation/bottom'
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      loading ? (
        <p>dssdd </p>
      ) : isAuthenticated ? (
        <>
        <Navbar/>
        <BottomNavigator/>
        <SideBar/>
        <Section>
        <Component {...props} />
        </Section>

        </>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);