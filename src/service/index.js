import axios from "axios";
import userState from "../store/userState";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL
});

instance.interceptors.request.use(async config => {
  const token = await getAccessToken();
  config.headers = {
    ...config.headers,
    token
  };
  return config;
}, error => {
  console.log(error);
});

const getAccessToken = async () => {
  const token = JSON.parse(localStorage.getItem("AUTH_DATA"));
  if (!token) return null;
  const expires_at = token.expires_at || null;
  let newData;
  if (Date.parse(expires_at) < Date.now()) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/refresh`, { withCredentials: true });
      newData = { ...response.data.data };
      localStorage.setItem("AUTH_DATA", JSON.stringify(newData));
    } catch (error) {
      if (error.response.status === 401) userState.logout();
    }
  }
  return newData ? newData.accessToken : token.accessToken;
};

export default instance;
