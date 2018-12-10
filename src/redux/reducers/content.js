import { actionManifest } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case actionManifest.CONTENT_FETCH_SUCCEEDED:
      return { ...state, ...action.data };
    default:
      return state;
  }
}