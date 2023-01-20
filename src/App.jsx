import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import NotFound from './components/404Page';
import BlogTemplate from './pages/Blog.Template';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogs/:id' element={<BlogTemplate />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
