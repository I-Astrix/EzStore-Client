const axios = require('axios');

const API_URL = 'http://localhost:1337';

export const publicRequest = axios.create({
    baseURL: API_URL,
})

// Missing Resources
// export const userRequest = axios.create({
//     baseUrl: API_URL,
//     header: {
//         'Content-type': 'application/json'
//     }
// })