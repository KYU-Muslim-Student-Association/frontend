import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Suspense } from 'react';
import { PropagateLoader } from 'react-spinners';

const Home = React.lazy(() => import('./pages/Home'));
const Blog = React.lazy(() => import('./pages/Blog'));
const NotFound = React.lazy(() => import('./components/404Page'));
const BlogTemplate = React.lazy(() => import('./pages/Blog.Template'));
const ErrorBoundary = React.lazy(() => import('./utils/ErrorBoundary'));

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Suspense fallback={<PropagateLoader color='#36d7b7' />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/blogs/:id' element={<BlogTemplate />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
export default App;
