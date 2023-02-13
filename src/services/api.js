import axios from "axios";

const api = axios.create( {
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
} );

api.defaults.baseURL = "https://kenziehub.herokuapp.com";


export default api;
