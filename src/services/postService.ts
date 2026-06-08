import api from "../api/axios";
import type { Post, PostCreate } from "../types/post";

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/blogs");
  return response.data;
};

export const getPost = async (id: number): Promise<Post> => {
  const response = await api.get<Post>(`/blogs/${id}`);
  return response.data;
};

export const createPost = async (data: PostCreate): Promise<Post> => {
  const response = await api.post<Post>("/blogs", data);
  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await api.delete(`/blogs/${id}`);
};
