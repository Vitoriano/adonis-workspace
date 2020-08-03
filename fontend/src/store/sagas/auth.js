import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'session', { email, password });

    localStorage.setItem('@App:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
  } catch (error) {
    console.log(error);
  }
}
