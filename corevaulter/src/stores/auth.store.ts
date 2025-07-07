import { create } from "zustand";
import { persist } from "zustand/middleware";
import { login, register, getCurrentUser } from "../api/auth";

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
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loadUser: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const { user, token } = await login(email, password);
          set({ user, token, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },
      register: async (name, email, password) => {
        set({ isLoading: true, error: null });
        try {
          const { user, token } = await register(name, email, password);
          set({ user, token, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      loadUser: async () => {
        set({ isLoading: true });
        try {
          const token = localStorage.getItem("token");
          if (token) {
            const user = await getCurrentUser(token);
            set({ user, token, isAuthenticated: true, isLoading: false });
          }
        } catch (error) {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token }),
    }
  )
);
