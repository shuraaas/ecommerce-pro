import axios from 'axios';

class Api {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _checkResult = res => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  // _request = (url, options) => fetch(url, options).then(this._checkResult);
  _request = url => {
    axios.get()
  };

  // _getToken = () => {
  //   const token = localStorage.getItem('jwt');

  //   return {
  //     authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   };
  // };

  // createMovie = (data) => {
  //   return this._request(`${this._url}movies`, {
  //     method: 'POST',
  //     headers: this._getToken(),
  //     body: JSON.stringify(data),
  //   });
  // };

  // deleteMovie = (movieId) => {
  //   return this._request(`${this._url}movies/${movieId}`, {
  //     method: 'DELETE',
  //     headers: this._getToken(),
  //   });
  // };

  // getSavedMovies = () => {
  //   return this._request(`${this._url}movies/`, {
  //     method: 'GET',
  //     headers: this._getToken(),
  //   });
  // };

  // getUserInfo = () => this._request(`${this._url}users/me`, { headers: this._getToken() });
  getCategories = () => this._request(`${this._url}categories`);

  // setUserInfo = ({ name, email }) => {
  //   return this._request(`${this._url}users/me`, {
  //     method: 'PATCH',
  //     headers: this._getToken(),
  //     body: JSON.stringify({
  //       name,
  //       email
  //     })
  //   });
  // };
}

// const apiConfig = { baseUrl: 'http://localhost:3000/' };
const apiConfig = { baseUrl: 'http://test.s1lentsorrow.ru/api/v1/' };
const api = new Api(apiConfig);

export default api;
