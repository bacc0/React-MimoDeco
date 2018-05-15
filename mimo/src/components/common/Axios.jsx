import axios from 'axios';


const instance = axios.create ({
   baseURL: 'https://painting-4c029.firebaseio.com/'
});

export default instance;