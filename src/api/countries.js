import API from './api';

// get questions
export function getCountries(callback) {
  API.get('/countries')
    .then((response) => callback(response.data));
}