
export function validate_login (email, password) {
    return {
        type: 'VALIDATE_LOGIN',
        email: email,
        password: password,
    }
}
