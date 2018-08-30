
export function users (state=[], action) {
    switch (action.type) {
        case 'UPDATE_STORE':
            return action.users;
        default:
            return state;
    }
}

export function token (state='', action) {
    switch (action.type) {
        case 'UPDATE_TOKEN':
            return action.token;
        default:
            return state;
    }
}
