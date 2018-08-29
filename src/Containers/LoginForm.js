import LoginForm from '../Components/LoginForm';
import { connect } from 'react-redux';

import { validate_login } from '../Actions';

export default connect(
    state => ({}),
    dispatch => ({
        validateLogin: (email, password) => dispatch(validate_login(email, password)),
    })
)(LoginForm);
