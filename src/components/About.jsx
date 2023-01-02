import React from 'react';
import AboutImage from '../assets/images/about.jpg';
import {
  Container,
  Grid,
  ImageListItem,
  Typography,
  Button,
} from '@mui/material';

const About = () => {
  return (
    <Container >
      <h1 class='heading'>
        <span>about</span> us
      </h1>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={6}>
          <ImageListItem>
            <img
              src={AboutImage}
              alt=''
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ImageListItem>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <ImageListItem>
            <Typography variant='h4' fontWeight={700}>
              Good things come to those{' '}
              <span style={{ color: '#c98d83' }}>who help </span> others
            </Typography>
            <Typography variant='body1' style={{ paddingTop: '20px' }}>
              The Kirinyaga University Muslims Students Association (KyUMSA) is
              a student-run organization that aims to provide a supportive
              community for Muslim students at Kirinyaga University. Our mission
              is to promote understanding and appreciation of Islam on campus
              and to provide opportunities for spiritual, social, and academic
              growth. We offer a variety of events and activities, including
              weekly Jumu'ah prayers, Islamic study sessions, and community
              service projects.
            </Typography>
            <Typography variant='body1' pt={2} pb={2}>
              The Organisation also carries activities outside school . Some
              main activities includes: visting orphange school near us,
              participating islamic rallies together with the other universities
              in the country
            </Typography>
            <Button variant='contained' sx={{ bgcolor: '#c98d83' }}>
              Read More
            </Button>
          </ImageListItem>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
