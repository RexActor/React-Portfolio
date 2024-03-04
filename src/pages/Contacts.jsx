import React, { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
// import { useState } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "asdsad",
    email: "asdasd",
    message: "asdasd",
  });
  console.log(formData);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <ContactForm
        // confirm={formData.confirm}
        handleFormSubmit={handleFormSubmit}
        name={formData.name}
        email={formData.email}
        message={formData.message}
      />
    </div>
  );
}
export default Contacts;
