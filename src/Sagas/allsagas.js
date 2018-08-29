import axios from 'axios';

import { call, put } from 'redux-saga/effects';

export function* validateLogin (action) {
    try {
        let responseToken = yield call(fetchTokenPromise, action);
        let token = responseToken.data.user.authentication_token;
        // console.log(responseToken);
        let responseUsers = yield call(fetchUsersPromise, token);
        console.log(responseUsers);
    } catch (e) {
        console.log(e);
    }
}
function fetchTokenPromise(action) {
    return axios({
        method: 'post',
        url: 'http://10.2.0.132:3000/apis/login.json',
        data: {
            "user": {
                "email": action.email,
                "password": action.password,
                "device_token": "131231231312312312312",
                "device_type": "android"
            }
        }
    });
}
function fetchUsersPromise(token) {
    return axios({
        method: 'post',
        url: 'http://10.2.0.132:3000/apis/admins/users.json',
        data: {},
        headers: {
            'Accept': 'application/nrcc.v1',
            'Content-Type': 'application/json',
            'Authorization': 'Token token=' + token,
        }
    });
}
