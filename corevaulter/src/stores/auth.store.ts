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
          set({ error: (error as Error).message, isLoading: false });
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
          set({ error: (error as Error).message, isLoading: false });
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
          set({ isAuthenticated: false, isLoading: false });
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
