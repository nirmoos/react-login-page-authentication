import React from 'react';

import './UserTable.css';

class UserTable extends React.Component {

    render() {
        return (
            <table className='table table-bordered user-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>ROLE</th>
                        <th>IS_ACTIVE</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((obj, index) =>
                        <tr key={index} >
                            <td>{obj.id}</td>
                            <td>{obj.first_name}</td>
                            <td>{obj.last_name}</td>
                            <td>{obj.email}</td>
                            <td>{obj.role}</td>
                            <td>{obj.is_active}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default UserTable;
