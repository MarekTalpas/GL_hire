import axios from 'axios';
import C from './constants';

const URL_CANDIDATES = 'http://localhost:8081/api/interviews?limit=5?start=0';

export function fetchCandidates() {
  const request = axios.get(URL_CANDIDATES);

  return (dispatch) => {
    request.then((data) => {
      console.log('data: ', data);
      dispatch({ type: C.FECTH_CANDIDATES, payload: data });
    }).catch(err => err);
  };
}
