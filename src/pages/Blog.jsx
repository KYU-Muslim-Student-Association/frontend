import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CardContainer from '../components/BlogCard';

// create a blog schema
const blogs = [
  {
    node: {
      id: 1,
      title: 'Blog 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image:
      'https://source.unsplash.com/random/',
      author: 'John Doe',
      tags: ['tag1', 'tag2', 'tag3'],
    },
  },
  {
    node: {
      id: 2,
      title: 'Blog 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image:
      'https://source.unsplash.com/random/',
      author: 'Jane Doe',
      tags: ['tag1', 'tag4'],
    },
  },
  {
    node: {
      id: 3,
      title: 'Blog 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image:
      'https://source.unsplash.com/random/',
      author: 'John Smith',
      tags: ['tag2', 'tag4'],
    },
  },
  {
    node: {
      id: 4,
      title: 'Blog 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image:
      'https://source.unsplash.com/random/',
      author: 'Jane Smith',
      tags: ['tag1', 'tag3', 'tag4'],
    },
  },
  {
    node: {
      id: 5,
      title: 'Blog 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image:
      'https://source.unsplash.com/random/',
      date: '2022-01-05',
      author: 'John Doe',
      tags: ['tag1', 'tag2'],
    },
  },
];

// provide 5 blog image url from unsplash


const Blog = () => {
  return (
    <div>
      <Container maxWidth='md'>
        <Typography variant='h4'>All Blogs</Typography>
        <Grid container spacing={3} direction='row' mt={2}>
          {blogs.map((blog, index) => {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <CardContainer blog={blog.node} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
