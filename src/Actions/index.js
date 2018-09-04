
export function validate_login (email, password) {
    return {
        type: 'VALIDATE_LOGIN',
        email: email,
        password: password,
    }
}

export function authenticate_user (token) {
    return {
        type: 'AUTHENTICATE_USER',
        token: token,
    }
}

export function update_users (users) {
    return {
        type: 'UPDATE_STORE',
        users: users,
    }
}

export function close_session () {
    return {
        type: 'CLOSE_SESSION',
    }
}

export function user_logout () {
    return {
        type: 'USER_LOGOUT',
    }
}
