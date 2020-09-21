import axios from 'axios';

const baseURL = 'api' //process.env.REACT_APP_API_HOST

// User 相關的 api
const userRequest = axios.create({
  baseURL: baseURL
});

export const apiGetUserId = () => userRequest.get('/userid');