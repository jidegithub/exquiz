import API from './api';

// get questions
export function getQuestions(callback) {
  API.get('/questions')
    .then((response) => callback(response.data));
}

export function getQuestionsII(callback) {
  API.get('/questions/v2')
    .then((response) => callback(response.data));
}
