import { put } from 'redux-saga/effects';

import { actionManifest } from '../actions';
import client from '../contentful/client';

const { CONTENT_FETCH_SUCCEEDED, CONTENT_FETCH_FAILED } = actionManifest;

export default function* contentSaga() {
  try {
    const data = yield client.getEntrys('34MlmiuMgU8wKCOOIkAuMy', {locale: '*'});
    yield put({ type: CONTENT_FETCH_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: CONTENT_FETCH_FAILED, error });
  }
}