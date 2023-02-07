import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-mgdev.herokuapp.com'
})

export { api };