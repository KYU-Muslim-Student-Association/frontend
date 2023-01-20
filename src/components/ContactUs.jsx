import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send an email using formData
    const { email, message } = formData;
    const recipient = "abubakarali3w@gmail.com";
    const subject = "New message from contact form";
    const body = `Sender's email: ${email}\n\n${message}`;
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container style={{ marginTop: '80px', marginBottom:'60px' }} id='contactus'>
      <Typography variant='h3' style={{ marginBottom: '32px', textAlign: 'center' }} className='heading' fontWeight={900}>
        <span style={{ color: 'primary' }}>Contact</span> Us
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          style={{ marginBottom: '16px', width: '50%' }}
          label="Email address"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          style={{ marginBottom: '16px', width: '50%', resize: 'vertical' }}
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          style={{ width: '25%', backgroundColor: '#c98d83' }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactUs;
