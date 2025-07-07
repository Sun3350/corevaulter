import { LoginForm } from "../components/auth/loginForm";
import { useAuthStore } from "../stores/auth.store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/Logo.png" alt="Logo" className="w-[150px]" />
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <LoginForm />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-[#D71E28] hover:text-red-700">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
