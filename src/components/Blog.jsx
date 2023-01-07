import React from 'react';
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
  }, [client]);
  let items = [];
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
  };

  return (
    <Container maxWidth='lg'>
      <Typography className='heading' variant='h3'>
        <span>Blogs</span>
      </Typography>

      {/* eslint-disable-next-line array-callback-return */}
      {blogs?.items?.map((blog, index) => {
        items = [
          ...items,
          <MediaCard
            name={blog.fields.blogTitle}
            bio={blog.fields.blogSummary}
            img={blog.fields.blogImage.fields.file.url}
            id={blog.sys.id}
            key={index}
          />,
        ];
      })}

      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </Container>
  );
};

export default Blog;
