import React, {useState} from 'react';
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server, show a thank you message, etc.)
    console.log(formData);
    // You can add your own logic here to handle form submission
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or would like to get in touch,
         please feel free to contact us using the information below:</p>
      <h3>Send us a message:</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p>Email: info@yourcompany.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Street Name, City, Country</p>
      </div>
    </div>
  );
}

export default Contact;