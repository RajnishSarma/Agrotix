import React from 'react';
import './contactUs.css'

function ContactUs ()  {
  return (
    <div className="contact-us-container" id='#contactUs'>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us using
        the contact form below.
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
