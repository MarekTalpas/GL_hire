import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import CandidatesReducer from './candidates_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  candidates: CandidatesReducer
});

export default rootReducer;
