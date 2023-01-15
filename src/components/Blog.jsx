import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

import MediaCard from '../components/BlogCard';
import Typography from '@mui/material/Typography';

import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { createClient } from 'contentful';

const Blog = () => {
  const client = createClient({
    space: 'whl0ksckl8aj',
    accessToken: 'ga3QyyQ7CzFfHql_YPDNfH7hszJzI8muREAJEYXcTgs',
    withCredentials: false,
  });

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const response = await client.getEntries();
        setBlogs(response);
      } catch (error) {
        console.log(error);
      }
    };

    getAllEntries();
  }, [client]);

  const [items, setItems] = useState([]);
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 3,
      itemsFit: 'contain',
    },
    1570: {
      items: 4,
      itemsFit: 'contain',
    },
  };

  useEffect(() => {
    const newItems = blogs?.items?.map((blog, index) => {
      return (
        <MediaCard
          name={blog.fields.blogTitle}
          bio={blog.fields.blogSummary}
          img={blog.fields.blogImage.fields.file.url}
          id={blog.sys.id}
          key={index}
        />
      );
    });
    setItems(newItems);
  }, [blogs]);

  return (
    <Container maxWidth='xl' id='blog'>
      <Typography className='heading' variant='h3' fontWeight={900}>
        <span>Blogs</span>
      </Typography>
      {items && items.length > 0 ? (
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      ) : null}
    </Container>
  );
};

export default Blog;
