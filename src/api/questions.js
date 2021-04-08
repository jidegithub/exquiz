import API from './api';

// get questions
export function getQuestions(callback) {
  API.get('/questions')
    .then((response) => callback(response.data));
}

export function getQuestionsII(callback) {
  API.get('/questions.json')
    .then((response) => callback(response.data));
}
