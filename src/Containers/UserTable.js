import { connect } from 'react-redux';

import UserTable from '../Components/UserTable';

export default connect(
    state => ({
        users: state.users,
    }),
)(UserTable);
