import { actionManifest } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case actionManifest.CONTENT_FETCH_SUCCEEDED:
      console.log(action.data);
      return { ...state, ...action.data };
    default:
      return state;
  }
}