import React from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'markdown-to-jsx';
import { Container, Grid, Box, Typography, Button } from '@mui/material';

function MarkdownListItem(props) {
  return <Box component='li' sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
  },
};

const BlogTemplate = () => {
  const [singleBlogPost, setSingleBlogPost] = React.useState({});
  const { id } = useParams();

  const client = createClient({
    space: 'whl0ksckl8aj',
    accessToken: 'ga3QyyQ7CzFfHql_YPDNfH7hszJzI8muREAJEYXcTgs',
    withCredentials: false,
  });
  React.useEffect(() => {
    const getEntry = async () => {
      try {
        await client.getEntry(id).then((response) => {
          setSingleBlogPost(response);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getEntry();
  }, [client, id]); // Only re-run the effect if the id changes

  return (
    <Container maxWidth='md'>
      <Box xs={{ margin: '1rem 0' }}>
        <header className='post-header'>
          {singleBlogPost.fields && (
            <img
              src={`https:${singleBlogPost.fields.blogImage.fields.file.url}`}
              title=''
              alt={singleBlogPost.fields.title}
              style={{
                width: '100%',
                maxWidth: '678px',
                height: 'auto',
                margin: '0 auto',
              }}
            />
          )}

          <Typography variant='h4' component='h1' gutterBottom>
            {singleBlogPost.fields && singleBlogPost.fields.blogTitle}
          </Typography>
          <Grid
            container
            sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
          >
            <Grid item sx={{ marginRight: '0.5rem' }}>
              By{' '}
              <a href='/' className='post-author'>
                {singleBlogPost.fields && singleBlogPost.fields.blogAuthor}
              </a>
            </Grid>
            <Grid
              item
              sx={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.54)' }}
            >
              {singleBlogPost.fields &&
                singleBlogPost.fields.createDate &&
                new Intl.DateTimeFormat('en-GB', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                }).format(new Date(singleBlogPost.fields.createDate))}
            </Grid>
          </Grid>
        </header>
        <Typography
          sx={{ fontSize: '1rem', lineHeight: 1.5 }}
          variant='body1'
          component='div'
        >
          {singleBlogPost.fields && (
            <ReactMarkdown
              options={options}
              children={singleBlogPost.fields.postContent}
            />
          )}
        </Typography>
      </Box>
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <Button
          sx={{ marginRight: '1rem' }}
          variant='outlined'
          color='primary'
          component={Link}
          to='/blogs'
        >
          Back to Blogs
        </Button>
        <div className='pure-menu pure-menu-horizontal'>
          <div className='pure-menu-item'>
            <a
              href='http://twitter.com/thecodeangle'
              className='pure-menu-link'
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default BlogTemplate;
