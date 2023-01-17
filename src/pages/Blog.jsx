import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MediaCard from '../components/BlogCard';
import { createClient } from 'contentful';
import Navigation from '../components/Navigation';


// provide 5 blog image url from unsplash

const Blog = () => {
  const client = createClient({
    space: 'whl0ksckl8aj',
    accessToken: 'ga3QyyQ7CzFfHql_YPDNfH7hszJzI8muREAJEYXcTgs',
    withCredentials: false,
  });

  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((response) => {
          setBlogs(response);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAllEntries();
  },[client]); 
  return (
    <div>
      <>
      <Navigation />
      <Container maxWidth='xl'>
        <Typography variant='h4'>All Blogs</Typography>
        <Grid container spacing={3} direction='row' mt={2}>
          {blogs?.items?.map((blog, index) => {
            return (
              <Grid item xs={12} sm={3} key={index}>
                <MediaCard
                  name={blog.fields.blogTitle}
                  bio={blog.fields.blogSummary}
                  img={blog.fields.blogImage.fields.file.url}
                  id={blog.sys.id}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      </>
    </div>
  );
};

export default Blog;
