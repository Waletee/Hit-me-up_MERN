import axios from 'axios'

const baseURL = process.env.BASEURL;
const API = axios.create({ baseURL });

export const logIn= (formData)=> API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);
