import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import LoginForm from '../Containers/LoginForm';
import LoggedIn from '../Apps/LoggedIn';

import { GlobalHistory } from '../history';

const RootRouter = ({ isAuthenticated }) => (
    <BrowserRouter >
        <div>
            <GlobalHistory />
            <Route exact path="/" render={() => (<Redirect to="/login"/>)} />
            <Route exact path='/login' render={routeProps => {
                const { from } = routeProps.location.state || { from: { pathname: '/users' } };
                return (
                    isAuthenticated ? (
                        <Redirect to={from} />
                    ) : (
                        <LoginForm />
                    )
                );
            }} />
            <PrivateRoute path='/users' isAuthenticated={isAuthenticated} component={LoggedIn} />
        </div>
    </BrowserRouter>
);

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={routeProps => (
        isAuthenticated === true ? (
            <Component {...routeProps} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {
                    from: rest.location,
                },
            }} />
        )
    )} />
);

export default connect(
    state => ({
        isAuthenticated: state.authenticate.isAuthenticated,
    })
)(RootRouter);
