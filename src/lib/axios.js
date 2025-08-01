import axios from "axios";

const api  = axios.create({
    baseURL:"https://backend-for-mynote.onrender.com/api"
})

export default api