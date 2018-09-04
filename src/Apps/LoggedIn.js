import React from 'react';

import UserTable from '../Containers/UserTable';
import LogoutButton from '../Containers/LogoutButton';

const LoggedIn = () => (
    <div className='LoggedIn'>
        <UserTable />
        <LogoutButton />
    </div>
);

export default LoggedIn;
