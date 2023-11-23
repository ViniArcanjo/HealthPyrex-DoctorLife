import { api } from "../api";
import { SignInCredentials, AuthResponse } from "../models/authService";

export async function auth({ email, password, role }: SignInCredentials) {
  return api.post("Login/Login", {
    email: email,
    password: password,
    role: role,
  });
}
