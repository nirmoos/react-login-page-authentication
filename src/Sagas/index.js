import { takeEvery } from 'redux-saga/effects';

import * as allsagas from './allsagas';

export default function* saga () {
    yield takeEvery('VALIDATE_LOGIN', allsagas.validateLogin);
}
