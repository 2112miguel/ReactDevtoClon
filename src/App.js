import React from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home';
import { Post } from './Pages/Post';
import { CreatePost } from './Pages/CreatePost';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" />
        <Route path="/createaccount" />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/editpost" />
      </Routes>
    </div>
  );
}

export default App;
