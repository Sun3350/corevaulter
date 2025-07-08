import { create } from "zustand";
import { persist } from "zustand/middleware";
import { login, register, getCurrentUser } from "../api/auth";
import axios from "axios";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    navigate: (path: string) => void
  ) => Promise<void>;
  logout: () => void;
  loadUser: () => Promise<void>;
  resetState: () => void;
};
function parseAxiosError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const backendMsg = error.response?.data?.message;

    if (backendMsg) return backendMsg;

    switch (status) {
      case 400:
        return "Invalid request. Please check your input.";
      case 401:
        return "Invalid credentials. Please try again.";
      case 403:
        return "Access denied. Unauthorized.";
      case 404:
        return "Resource not found.";
      case 500:
        return "Server error. Please try again later.";
      default:
        return "An unexpected error occurred.";
    }
  }
  return "Something went wrong. Please try again.";
}
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        const state = get();
        if (state.isLoading) return;

        set({ isLoading: true, error: null });
        try {
          const { user, token } = await login(email, password);
          set({ user, token, isAuthenticated: true, isLoading: false });
        } catch (error) {
          const msg = parseAxiosError(error);
          set({ error: msg, isLoading: false });
          throw error; // Re-throw to handle in component
        }
      },

      register: async (name, email, password, navigate) => {
        const state = get();
        if (state.isLoading) return;

        set({ isLoading: true, error: null });
        try {
          await register(name, email, password);
          set({ isLoading: false });
          // Navigate to login page after successful registration
          navigate("/login");
        } catch (error) {
          const msg = parseAxiosError(error);
          set({ error: msg, isLoading: false });
          throw error; // Re-throw to handle in component
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
          isLoading: false,
        });
      },

      loadUser: async () => {
        const token = get().token;
        if (!token) return;

        set({ isLoading: true });
        try {
          const user = await getCurrentUser(token);
          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          const msg = parseAxiosError(error);
          set({ error: msg, isLoading: false });
          throw error;
        }
      },

      resetState: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
          isLoading: false,
        });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token }),
    }
  )
);
