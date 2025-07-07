import { useState } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../api/schemas";
import { useAuthStore } from "../../stores/auth.store";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}>
    {children}
  </motion.div>
);

export function RegisterForm() {
  const { register, isLoading, error } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await register(values.name, values.email, values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </motion.div>
      )}

      <FadeIn>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`mt-1 block w-full px-3 py-2 border ${
            formik.touched.name && formik.errors.name
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-[#D71E28] focus:border-[#D71E28] transition-all duration-200`}
        />
        {formik.touched.name && formik.errors.name && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-600">
            {formik.errors.name}
          </motion.p>
        )}
      </FadeIn>

      <FadeIn delay={0.1}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`mt-1 block w-full px-3 py-2 border ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-[#D71E28] focus:border-[#D71E28] transition-all duration-200`}
        />
        {formik.touched.email && formik.errors.email && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-600">
            {formik.errors.email}
          </motion.p>
        )}
      </FadeIn>

      <FadeIn delay={0.2}>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative mt-1">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block w-full px-3 py-2 border ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-[#D71E28] focus:border-[#D71E28] transition-all duration-200`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            )}
          </button>
        </div>
        {formik.touched.password && formik.errors.password && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-600">
            {formik.errors.password}
          </motion.p>
        )}
      </FadeIn>

      <FadeIn delay={0.3}>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="relative mt-1">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block w-full px-3 py-2 border ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-[#D71E28] focus:border-[#D71E28] transition-all duration-200`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            )}
          </button>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-sm text-red-600">
            {formik.errors.confirmPassword}
          </motion.p>
        )}
      </FadeIn>

      <FadeIn delay={0.4}>
        <button
          type="submit"
          disabled={
            isLoading ||
            !formik.isValid ||
            formik.values.password !== formik.values.confirmPassword
          }
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#D71E28] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D71E28] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Creating account...
            </span>
          ) : (
            "Create Account"
          )}
        </button>
      </FadeIn>
    </form>
  );
}
