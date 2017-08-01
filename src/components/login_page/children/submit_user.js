import { SubmissionError } from 'redux-form';

export default (values) => {
  if (values.username !== 'user1') {
    throw new SubmissionError({
      username: 'User does not exist',
      _error: 'Login failed!'
    });
  } else if (values.password !== 'secret') {
    throw new SubmissionError({
      password: 'Wrong password',
      _error: 'Login failed!'
    });
  } else {
    console.log('user has been successfuly submitted');
  }
};
