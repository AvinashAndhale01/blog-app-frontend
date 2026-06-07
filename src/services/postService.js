import api from "../api/axios";

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPost = async (id) => {
  const response = await api.get("/posts/${id}");
};

export const createPost = async (data) => {
  const response = await api.post("/posts", data);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await api.delete("/posts/${id}");
};
