import axios from 'axios'

const baseurl = process.env.BASE_URL;
const API = axios.create({ baseURL: baseurl });

export const logIn= (formData)=> API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);
