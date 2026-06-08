import api from "../api/axios";
import type { LoginRequest, SignupRequest, LoginResponse } from "../types/auth";

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", data);
  return response.data;
};

export const signupUser = async (data: SignupRequest) => {
  const response = await api.post("/auth/signup", data);
  return response.data;
};
