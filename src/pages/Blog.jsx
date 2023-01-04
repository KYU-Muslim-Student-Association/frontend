import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MediaCard from '../components/BlogCard';
import { blogs } from '../data/dummyblog';

// provide 5 blog image url from unsplash


const Blog = () => {
  return (
    <div>
      <Container maxWidth='xl'>
        <Typography variant='h4'>All Blogs</Typography>
        <Grid container spacing={3} direction='row' mt={2}>
          {blogs.map((blog, index) => {
            return (
              <Grid item xs={12} sm={3} key={index}>
                <MediaCard name={blog.node.title} bio={blog.node.description} img={blog.node.image}  />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
