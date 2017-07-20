import axios from 'axios';
import C from './constants';
import { TOKEN } from '../../API/fetch';

const CANDIDATES_URL = 'http://localhost:8090/api/interviews';

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
