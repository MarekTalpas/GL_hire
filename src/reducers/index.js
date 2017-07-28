import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import CandidatesReducer from './candidates_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  candidates: CandidatesReducer
});

export default rootReducer;
