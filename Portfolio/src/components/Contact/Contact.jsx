import React, { useState } from 'react';
import './Contact.css';
import { assets } from '../../assets/assets';
import { FaDownload, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzpux25PdOp_dPWjDhf25EdShAn9w151fbryHNPAYpB3fofHxx0LN0cXaBJ2lbaFR8y/exec';

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-heading">
        <span>Reach</span> Me
      </h1>

      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-detail">
            <img src={assets.email} alt="email" />
            <div>
              <h4>Email</h4>
              <p>uvajanani24@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <img src={assets.phone} alt="phone" />
            <div>
              <h4>Phone</h4>
              <p>+91 8438961443</p>
            </div>
          </div>

          <div className="contact-detail">
            <img src={assets.map} alt="location" />
            <div>
              <h4>Location</h4>
              <p>Tiruchirapalli, Tamil Nadu</p>
            </div>
          </div>

          <div className="contact-socials">
            <h4>
              <span>Connect</span> With Me
            </h4>
            <div className="social-icons">
              <a href="http://github.com/Uvajanani">
                <img src={assets.git} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/uvajanani-r-p-214a44257/">
                <img src={assets.linkedin} alt="LinkedIn" />
              </a>
              <a href="https://x.com/uvajanani">
                <img src={assets.twitter} alt="Twitter" />
              </a>
            </div>
          </div>

          <a href="\Uvajanani-Resume.pdf" download>
            <button className="contact-button">
              <FaDownload className="icon" /> Download Resume
            </button>
          </a>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="send-button">
              Send Message <FaPaperPlane className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
