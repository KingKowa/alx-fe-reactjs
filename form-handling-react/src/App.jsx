import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Recipe Sharing Application</h1>
      <RegistrationForm />
      <formikForm />
    </div>
  );
}

export default App;
