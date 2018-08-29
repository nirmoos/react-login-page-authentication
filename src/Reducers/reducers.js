
function users (state=[], action) {
    switch (action.type) {
        case 'UPDATE_STORE':
            return action.users;
        default:
            return state;
    }
}

export default users;
