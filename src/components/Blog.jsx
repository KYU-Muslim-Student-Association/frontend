import React from 'react';
import Container from '@mui/material/Container';

import MediaCard from '../components/BlogCard';
import { blogs } from '../data/dummyblog';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';


const Blog = () => {
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

      {blogs.map((blog, index) => {
        count++;
        items = [
          ...items,
          <MediaCard
            name={blog.node.title}
            bio={blog.node.description}
            img={blog.node.image}
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
