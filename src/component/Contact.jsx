

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
    // You can also add code to send the form data to a server or API
  };

  return (
    <div className="container mt-5 "
    style={{
        background: '#f2f2f2', // Light grey color
        color: 'black', // Set text color to black for better visibility
        padding: '20px',
        borderRadius: '10px',
      }}>
      <div className="row text-center">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="text-center mb-4 fs-5">
            We'd love to hear from you! Contact us using the form below or visit our store.
          </p>
          <div className="mb-4">
            <h1>Visit Us</h1>
            <p className='fs-5'>123 Fashion Street, Cityville, Mystic Falls, 627007</p>
          </div>
          <div className="mb-4">
            <h1>Call Us</h1>
            <p className='fs-5' >Phone:  +91 9345244760</p>
          </div>
          <div className="mb-4">
            <h1>Email Us</h1>
            <p className='fs-5'>Email: salvatore@support.com </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 fs-5">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 fs-5">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 fs-5">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
