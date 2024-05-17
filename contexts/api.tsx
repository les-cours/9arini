// api.js
import Axios from "axios";

let urls = {
    test: `http://127.0.0.1:3004`,
    development: 'http://localhost:3333/',
    production: 'https://your-production-url.com/'
}
const api = Axios.create({
    baseURL: urls['test'],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;