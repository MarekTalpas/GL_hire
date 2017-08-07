import axios from 'axios';
import C from './constants';
import { SubmissionError } from 'redux-form';
import { TOKEN } from '../../API/fetch';

const ROOT_URL = 'http://localhost:8090/api';
const LOGIN_URL = `${ROOT_URL}/auth/login`;
const CANDIDATES_URL = `${ROOT_URL}/interviews`;

const localStorage = window.localStorage;

export function fetchCandidates() {
  const request = axios.get(CANDIDATES_URL, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });

  return (dispatch) => {
    request.then((candidates) => {
      console.log('data: ', candidates.data);
      dispatch({ type: C.FECTH_CANDIDATES, payload: candidates.data });
    }).catch(err => err);
  };
}

export function signinUser({ username, password }) {
  if (username !== 'user1') {
    throw new SubmissionError({
      username: 'User does not exist',
      _error: 'Login failed!'
    });
  } else if (password !== 'secret') {
    throw new SubmissionError({
      password: 'Wrong password',
      _error: 'Login failed!'
    });
  } else {
    return (dispatch) => {
      axios.post(LOGIN_URL, { username, password })
        .then(response => {
          dispatch({ type: C.AUTH_USER });
          localStorage.setItem('token', response.data.token);
          window.location.href = '/';
        })
        .catch(() => {
          dispatch(authError('Invalid Username or Password'));
        });
    }
  };
}

export function authError(error) {
  return {
    type: C.AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: C.UNAUTH_USER };
}

export function fetchLocations() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/locations`, {
      headers: { authorization: `Bearer ${window.localStorage.getItem('token')}` }
    })
      .then(response => {
        dispatch({
          type: C.FETCH_LOCATIONS,
          payload: response.data.message
        });
      });
  };
}
