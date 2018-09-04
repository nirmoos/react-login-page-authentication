import { combineReducers } from 'redux';

import { users, authenticate } from './reducers';

const rootReducer = combineReducers({
    authenticate,
    users,
});

export default rootReducer;
