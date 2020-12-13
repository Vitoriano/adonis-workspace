import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'session', { email, password });

    localStorage.setItem('@App:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (error) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Falha no login',
      message: 'Verifique seu e-mail/senha!',
    }));
  }
}