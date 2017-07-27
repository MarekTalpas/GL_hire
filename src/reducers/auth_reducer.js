import C from '../actions/constants';

export default function (state = {}, action) {
  switch (action.type) {
    case C.AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case C.UNAUTH_USER:
      return { ...state, authenticated: false };
    case C.AUTH_ERROR:
      return { ...state, error: action.payload };
    case C.FETCH_LOCATIONS:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
