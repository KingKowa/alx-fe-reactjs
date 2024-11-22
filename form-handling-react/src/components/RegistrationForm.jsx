import React, { useState } from "react";

const RegistrationForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!password.trim()) newErrors.password = "Password is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    // Simulate API call
    alert("Registration successful!");
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Input */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              style={{ display: "block", width: "100%", marginTop: "5px" }}
            />
          </label>
          {errors.username && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.username}
            </span>
          )}
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              style={{ display: "block", width: "100%", marginTop: "5px" }}
            />
          </label>
          {errors.email && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              style={{ display: "block", width: "100%", marginTop: "5px" }}
            />
          </label>
          {errors.password && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.password}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
