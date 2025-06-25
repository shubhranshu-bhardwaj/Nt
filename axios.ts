import axios from 'axios';

// const API = axios.create({
//   baseURL: '/api', // or http://localhost:5000/api depending on your backend
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default API;

const API = axios.create({
  baseURL: 'http://localhost:5120/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;

