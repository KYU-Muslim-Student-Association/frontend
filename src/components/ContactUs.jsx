import { Button, Container, TextField, Typography } from '@mui/material';

import React from 'react';

const ContactUs = () => {
  return (
    <Container style={{ marginTop: '80px', marginBottom:'60px' }}>
      <Typography variant='h3' style={{ marginBottom: '32px', textAlign: 'center' }} className='heading'>
        <span style={{ color: 'primary' }}>Contact</span> Us
      </Typography>
      <form action="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          style={{ marginBottom: '16px', width: '50%' }}
          label="Email address"
          type="email"
          variant="outlined"
        />
        <TextField
          style={{ marginBottom: '16px', width: '50%', resize: 'vertical' }}
          label="Message"
          multiline
          rows={4}
          variant="outlined"
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
