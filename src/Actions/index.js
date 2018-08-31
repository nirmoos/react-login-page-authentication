
export function validate_login (email, password) {
    return {
        type: 'VALIDATE_LOGIN',
        email: email,
        password: password,
    }
}

export function update_users (users) {
    return {
        type: 'UPDATE_STORE',
        users: users,
    }
}

export function update_token (token) {
    return {
        type: 'UPDATE_TOKEN',
        token: token,
    }
}

export function user_logout () {
    return {
        type: 'USER_LOGOUT',
    }
}

export function clear_token () {
    return {
        type: 'CLEAR_TOKEN',
    }
}
