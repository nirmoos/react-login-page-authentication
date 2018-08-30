import { combineReducers } from 'redux';

import { users, token } from './reducers';

const rootReducer = combineReducers({
    token,
    users,
});

export default rootReducer;
