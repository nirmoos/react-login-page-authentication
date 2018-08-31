import axios from 'axios';

import { call, put } from 'redux-saga/effects';

import { update_users, update_token, clear_token } from '../Actions';

import getHistory from '../history';

let globalToken = '';

export function* validateLogin (action) {
    try {
        let responseToken = yield call(fetchTokenPromise, action);
        let token = responseToken.data.user.authentication_token;

        globalToken = token;

        yield put(update_token(token));

        let responseUsers = yield call(fetchUsersPromise, token);
        let users = responseUsers.data.users;

        yield put(update_users(users));

        getHistory().push('/users');
    } catch (e) {
        console.log(e);
    }
}

export function* userLogout () {
    try {
        yield call(fetchLogoutPromise, globalToken);

        yield put(clear_token());

        getHistory().push('/login');
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
        method: 'get',
        url: 'http://10.2.0.132:3000/apis/admins/users.json',
        data: {},
        headers: {
            'Accept': 'application/nrcc.v1',
            'Content-Type': 'application/json',
            'Authorization': 'Token token=' + token,
        },
        params: {
            page: 1,
            limit: 10,
            approved: true,
        }
    });
}

function fetchLogoutPromise (token) {
    return axios({
        method: 'delete',
        url: 'http://10.2.0.132:3000/apis/logout.json',
        data: {},
        headers: {
            'Accept': 'application/nrcc.v1',
            'Content-Type': 'application/json',
            'Authorization': 'Token token=' + token,
        },
    })
}
