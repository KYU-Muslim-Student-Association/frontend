import React from 'react';
import Container from '@mui/material/Container';

import MediaCard from '../components/BlogCard';

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
  }, []);
  let items = [];
  let count = 0;
  const responsive = {
    0: {
      items: 1,
      itemsFit: 'fill',
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
    <Container maxWidth='xl'>
      <h1 className='heading' variant='h4'>
        All <span>Blogs</span>
      </h1>

      {/* eslint-disable-next-line array-callback-return */}
      {blogs?.items?.map((blog, index) => {
        count++;
        items = [
          ...items,
          <MediaCard
            name={blog.fields.blogTitle}
            bio={blog.fields.blogSummary}
            img={blog.fields.blogImage.fields.file.url}
            id={blog.sys.id}
            data-value={count}
          />,
        ];
      })}

      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy='alternate'
        responsive={responsive}
      />
    </Container>
  );
};

export default Blog;
