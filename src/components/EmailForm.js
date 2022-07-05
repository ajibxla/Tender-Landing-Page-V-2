import React from "react";
import { useState } from "react";

function EmailForm() {
  const [prospectEmail, setProspectEmail] = useState(" ");

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("submitted");
    // setProspectEmail(" ");
  };

  const handleChange = (event) => {
    setProspectEmail(event.target.value);
    console.log(prospectEmail);
  };

  return (
    <form
      id="form"
      method="post"
      action="https://app.engage.so/embed/6282c40e8eafc4a78e4b93a4"
    >
      <input
        type="email"
        required
        name="email"
        value={prospectEmail}
        placeholder="Your email..."
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Get early access
      </button>
    </form>
  );
}

export default EmailForm;
