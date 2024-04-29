import axios from 'axios'


const API = axios.create({ baseURL: 'https://hit-me-up-api.onrender.com' });

export const logIn= (formData)=> API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);
