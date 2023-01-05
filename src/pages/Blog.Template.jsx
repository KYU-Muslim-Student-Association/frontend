import React from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Container } from '@mui/system';

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
  });
  return (
    <Container>
      <Link to='/blogs' className='content-subhead'>
        Blog Posts
      </Link>

      <header className='post-header'>
        <img
          src={`https:${singleBlogPost?.fields?.blogImage?.fields?.file?.url}`}
          title=''
          alt={singleBlogPost?.fields?.title}
          width='578'
          height='291'
        />
        <h2 className='post-title pt-3'>{singleBlogPost?.fields?.title}</h2>
        <p className='post-meta'>
          By{' '}
          <a href='https://thecodeangle.com/' className='post-author'>
            {singleBlogPost?.fields?.blogAuthor}
          </a>{' '}
          Date <span></span>
          <small>
            {singleBlogPost?.fields?.createDate === undefined
              ? 'loading'
              : new Intl.DateTimeFormat('en-GB', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                }).format(new Date(singleBlogPost?.fields?.createDate))}
          </small>
        </p>
      </header>
      <div className='post-description'>
        {/* <MD source={singleBlogPost?.fields?.blogContent} /> */}
        <ReactMarkdown children={singleBlogPost?.fields?.postContent} />,
      </div>

      <div className='footer'>
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
      </div>
    </Container>
  );
};

export default BlogTemplate;
