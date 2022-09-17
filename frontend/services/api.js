import axios from 'axios';

// that is how we get data from the backend
export default () => {
  return axios.create({
    baseURL: `http://localhost:8000/`,// add the url of your backend server.
  });
}