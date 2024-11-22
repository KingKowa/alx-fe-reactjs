import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("Registration successful!");
    resetForm(); // Reset form after submission
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Register with Formik</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* Username Field */}
            <div style={{ marginBottom: "10px" }}>
              <label>
                Username:
                <Field
                  type="text"
                  name="username"
                  style={{ display: "block", width: "100%", marginTop: "5px" }}
                />
              </label>
              <ErrorMessage
                name="username"
                component="span"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "10px" }}>
              <label>
                Email:
                <Field
                  type="email"
                  name="email"
                  style={{ display: "block", width: "100%", marginTop: "5px" }}
                />
              </label>
              <ErrorMessage
                name="email"
                component="span"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: "10px" }}>
              <label>
                Password:
                <Field
                  type="password"
                  name="password"
                  style={{ display: "block", width: "100%", marginTop: "5px" }}
                />
              </label>
              <ErrorMessage
                name="password"
                component="span"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" style={{ marginTop: "10px" }}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
