import React from 'react';
import { connect } from 'react-redux';

import { user_logout } from '../Actions';
import LogoutButton from '../Components/LogoutButton';

export default connect(
    state => ({}),
    dispatch => ({
        userLogout: () => dispatch(user_logout()),
    })
)(LogoutButton);
