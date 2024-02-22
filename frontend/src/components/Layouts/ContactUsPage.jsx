import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let isValid = true;

    // Validation logic
    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
      isValid = false;
    }
    if (!formData.mobile.trim()) {
      errors.mobile = "Please enter your mobile number";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your email";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter your message";
      isValid = false;
    }

    if (isValid) {
      // Form submission logic (e.g., send data to server)
      console.log("Form submitted:", formData);

      // Reset form fields after submission
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
    } else {
      // Update formErrors state to display error messages
      setFormErrors(errors);
    }
  };

  return (
    <div className="container">
      <div className="container form bg-white pt-5 mt-4 mb-3">
        <p className="text-center contact-heading">Contact Us</p>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row pl-5 pt-3">
              <div className="col-12 pt-3">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "85%",
                    border: "transparent",
                    borderBottom: "2px solid black",
                    height: "40px",
                  }}
                />
                {formErrors.name && (
                  <div className="name-hide" style={{ color: "red" }}>
                    {formErrors.name}
                  </div>
                )}
              </div>
              <div className="col-12 pt-4">
                <input
                  type="text"
                  placeholder="Mobile No."
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  style={{
                    width: "85%",
                    border: "transparent",
                    borderBottom: "2px solid black",
                    height: "40px",
                  }}
                />
                {formErrors.mobile && (
                  <div className="mobile-hide" style={{ color: "red" }}>
                    {formErrors.mobile}
                  </div>
                )}
              </div>
              <div className="col-12 pt-4">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "85%",
                    border: "transparent",
                    borderBottom: "2px solid black",
                    height: "40px",
                  }}
                />
                {formErrors.email && (
                  <div className="email-hide" style={{ color: "red" }}>
                    {formErrors.email}
                  </div>
                )}
              </div>
              <div className="col-12 pt-5">
                <textarea
                  rows="5"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ width: "85%" }}
                ></textarea>
                {formErrors.message && (
                  <div className="hide-message" style={{ color: "red" }}>
                    {formErrors.message}
                  </div>
                )}
              </div>
              <div className="col-12 pt-5 bg-red ">
                <button
                  type="submit"
                  className="btn text-white send-button"
                  style={{ width: "85%" }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
