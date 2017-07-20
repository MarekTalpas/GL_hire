import C from '../actions/constants';

export default function (state = [], action) {
  switch (action.type) {
    case C.FECTH_CANDIDATES:
      return [action.payload, ...state];
    default:
      return state;
  }
}
