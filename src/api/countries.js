import API from './api';

// get questions
export function getCountries(callback) {
  API.get('/countries.json')
    .then((response) => callback(response.data));
}