import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup.string().required("username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const loginSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("Password is required"),
});
