import axios from 'axios'
//https://free.currconv.com/api/v7
///convert?q=USD_PHP&compact=ultra&apiKey=8d25a374006e263d6f22
const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7'
    
});
export default api;