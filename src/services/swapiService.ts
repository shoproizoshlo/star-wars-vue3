import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api'

const swapiService = axios.create({
  baseURL: BASE_URL
})
export default swapiService
