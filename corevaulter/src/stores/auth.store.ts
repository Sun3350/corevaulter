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
        if (state.isLoading) return; // Prevent double loading

        set({ isLoading: true, error: null });
        try {
          const { user, token } = await login(email, password);
          set({ user, token, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      register: async (name, email, password) => {
        const state = get();
        if (state.isLoading) return;

        set({ isLoading: true, error: null });
        try {
          await register(name, email, password);
          // 👇 Don't set token or isAuthenticated here
          set({ isLoading: false });
        } catch (error) {
          set({ error: (error as Error).message, isLoading: false });
        }
      },

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
          isLoading: false,
        }),

      loadUser: async () => {
        const token = localStorage.getItem("auth-storage")
          ? JSON.parse(localStorage.getItem("auth-storage")!).state.token
          : null;

        if (!token) return;

        set({ isLoading: true });
        try {
          const user = await getCurrentUser(token);
          set({ user, token, isAuthenticated: true, isLoading: false });
        } catch {
          set({ isAuthenticated: false, isLoading: false });
        }
      },
      // ✅ Add a reset helper to manually clear UI state
      resetState: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
          isLoading: false,
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token }),
    }
  )
);
