import axios from 'axios';

import { call, put, select } from 'redux-saga/effects';

import { update_users, authenticate_user, close_session } from '../Actions';

import getHistory from '../history';

let globalToken = '';

const getAllUsers = state => state.users

export function* validateLogin (action) {
    try {
        let responseToken = yield call(fetchTokenPromise, action);
        let token = responseToken.data.user.authentication_token;

        globalToken = token;

        yield put(authenticate_user(token));

        let responseUsers;
        for (let pageNo=1; pageNo<=5; pageNo++) {
            responseUsers = yield call(fetchUsersPromise, [token, pageNo]);
            yield put(update_users(responseUsers.data.users));
        }

        getHistory().push('/users');

    } catch (error) {
        // console.log(error);
    }
}

export function* userLogout () {
    try {
        yield call(fetchLogoutPromise, globalToken);

        yield put(close_session());

        getHistory().push('/login');
    } catch (error) {
        // console.log(error);
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
function fetchUsersPromise([token, pageNo]) {
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
            page: pageNo,
            limit: 14,
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
