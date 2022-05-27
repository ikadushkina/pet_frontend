import instance from "./index";

export const getUsers = async () => {
  const response = await instance.get("/auth/users");
  return response.data;
};

export const signUp = async params => {
  const response = await instance.post("/auth/sign-up", params, { withCredentials: true });
  return response.data;
};

export const login = async params => {
  const response = await instance.post("/auth/login", params, { withCredentials: true });
  return response.data;
};

export const logout = async () => {
  const response = await instance.post("/auth/logout", {}, { withCredentials: true });
  return response.data;
};

export const me = async (email) => {
  const response = await instance.get(`/user/me?email=${email}`, { withCredentials: true });
  return response.data;
};

export const updateUser = async (data) => {
  const response = await instance.post("/user/update", data, { withCredentials: true });
  return response.data;
};
