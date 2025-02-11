// components/ContactForm.js
import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResponseMsg(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMsg('An error occurred. Please try again.');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} aria-label="Contact Form">
      <h2>Contact Us</h2>
      <label htmlFor="name">Name</label>
      <input 
        id="name" 
        name="name" 
        type="text" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />

      <label htmlFor="email">Email</label>
      <input 
        id="email" 
        name="email" 
        type="email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />

      <label htmlFor="message">Message</label>
      <textarea 
        id="message" 
        name="message" 
        value={formData.message} 
        onChange={handleChange} 
        required
      ></textarea>

      <button type="submit">Send Message</button>
      {responseMsg && <p>{responseMsg}</p>}
    </form>
  );
};

export default ContactForm;
