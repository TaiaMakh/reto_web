import axios from 'axios'

class PhoneService {
    constructor() {
      this.api = axios.create({
        baseURL: 'http://localhost:5000/api',
        withCredentials: true,
      });
    }
    get = () => this.api.get("/phones")
  
  }
  
  const phoneService = new PhoneService()
  
  export default phoneService;