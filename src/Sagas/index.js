import { takeEvery } from 'redux-saga/effects';

import * as sagas from './sagas';

export default function* rootSaga () {
    yield takeEvery('VALIDATE_LOGIN', sagas.validateLogin);
    yield takeEvery('USER_LOGOUT', sagas.userLogout);
}
