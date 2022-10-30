import { useAuth } from "@okta/okta-vue";
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const auth = useAuth();
  config.headers.authorization = `Bearer ${auth.getAccessToken()}`;
  return config;
});

export default axiosInstance;
