
import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/Blog';
import NotFound from './components/404Page';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
    </div>
  );

  }
export default App;
