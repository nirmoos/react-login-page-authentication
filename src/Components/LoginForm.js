import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './LoginForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.emailPattern = /\w+@[a-z]{3,7}\.\w+/
        this.passwordPattern = /^[a-zA-Z]+([0-9]+[a-zA-Z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[a-zA-Z]*[0-9]+)[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validateItems = this.validateItems.bind(this);
    }
    onChangeEmail(event) {
        this.setState({
            email: event.target.value,
        });
    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.validateItems(this.emailPattern, this.state.email))
            this.props.validateLogin(this.state.email, this.state.password);
    }
    validateItems(pattern, item) {
        return pattern.test(item);
    }
    render() {
        return (
            <div className="login-form-container">
    		    <form name="login-form" className="login-form" onSubmit={this.onSubmit}>
        			<input type="text" className="email" name="email" placeholder="Email..." onChange={this.onChangeEmail} />
                    <p className='uname-msg'> {
                        this.validateItems(this.emailPattern, this.state.email) ?
                            (<span className='i'><FontAwesomeIcon icon="check" /></span>) :
                            ('should be in the form: example@qburst.com')
                    }</p>
        			<input type="text" className="password" name="password" placeholder="Password..." onChange={this.onChangePassword} />
                    <p className='pword-msg'>{
                        this.state.password.length < 7 ?
                            ('should be atleast 7 characters long') : (
                                this.validateItems(this.passwordPattern, this.state.password) ?
                                    (<span className='i'><FontAwesomeIcon icon="check" /></span>) :
                                    ('should start with a letter and contain atleast one letter and one special character')
                            )
                    }</p>
        			<input type="submit" value="Sign In" />
        		</form>
        	</div>
        );
    }
}

export default LoginForm;
