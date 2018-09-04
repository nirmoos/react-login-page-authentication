
export function users (state=[], action) {
    switch (action.type) {
        case 'UPDATE_STORE':
            return action.users;
        default:
            return state;
    }
}

export function authenticate (state=initialAuthenticateState, action) {
    switch (action.type) {
        case 'AUTHENTICATE_USER':
            return {
                isAuthenticated: true,
                token: action.token,
            };
        case 'CLOSE_SESSION':
            return {
                isAuthenticated: false,
                token: '',
            }
        default:
            return state;
    }
}

const initialAuthenticateState = {
    isAuthenticated: false,
    token: '',
}
