import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://api.github.com",
});

export default apiInstance;
