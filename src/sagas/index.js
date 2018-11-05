import { all, takeEvery } from 'redux-saga/effects'

import content from './content';

export default function* rootSaga() {
  yield all([
    takeEvery('REQUEST_CONTENT', content),
  ])
}