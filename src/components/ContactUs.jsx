import { Button, Container } from '@mui/material';
import React from 'react';

const ContactUs = () => {
  return (
    <Container className='contact'>
      <h1 class='heading'>
        <span>Contact</span> Us
      </h1>

      <div className='row'>
        <form action=''>
          <div className='inputBox'>
            <input type='email' placeholder='email address' />
          </div>

          <textarea
            placeholder='Message'
            name=''
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <Button
            type='submit'
            variant='contained'
            style={{ backgroundColor: '#c98d83' }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactUs;
