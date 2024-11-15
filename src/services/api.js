import axios from 'axios'

const api = axios.create({
    baseURL: 'https://testing-backend-8qik.onrender.com'
})

export default api