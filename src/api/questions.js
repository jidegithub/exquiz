import API from './api';

//get questions
export function getQuestions(callback) {
  API.get(`/questions`)
  .then(response => {
    return callback(response.data);
  });
}