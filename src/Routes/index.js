import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import LoginForm from '../Containers/LoginForm';
import UserTable from '../Containers/UserTable';
import LogoutButton from '../Containers/LogoutButton';

import { GlobalHistory } from '../history';

export default function RootRouter () {
    return (
        <BrowserRouter>
            <div>
                <GlobalHistory />
                <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
                <Route exact path='/login' component={LoginForm} />
                <Route exact path='/users' component={UserTable} />
                <Route exact path='/users' component={LogoutButton} />
            </div>
        </BrowserRouter>
    );
}
