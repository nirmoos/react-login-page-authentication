import React from 'react';

import './LogoutButton.css';

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        this.props.userLogout();
    }
    render () {
        return (
            <div className='logout-button'>
                <button onClick={this.onClick} >Logout</button>
            </div>
        );
    }
}

export default LogoutButton;
