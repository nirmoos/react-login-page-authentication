import React from 'react';

import './UserTable.css';

class UserTable extends React.Component {

    render() {
        return (
            <table className='table table-bordered user-table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>email</th>
                        <th>role</th>
                        <th>is_active</th>
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
