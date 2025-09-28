import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-2025-a2ce5/us-central1/api"
  // baseURL: "https://api-qrkx4i6mva-uc.a.run.app"
  baseURL: "https://amazon-api-deploy-s3up.onrender.com"
});
export { axiosInstance };
