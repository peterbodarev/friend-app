import * as yup from "yup";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const friendFormSchema = yup.object({
  lastName: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  firstName: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .min(4, "Email is required")
    .email("Must be a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone is required"),
  username: yup
    .string()
    .min(2, "Twitter is required and must be at least 2 characters")
    .required("Twitter is required"),
});
