
export function validate_login (email, password) {
    return {
        type: 'VALIDATE_LOGIN',
        email: email,
        password: password,
    }
}

export function update_store (users) {
    return {
        type: 'UPDATE_STORE',
        users: users,
    }
}
