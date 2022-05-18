import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home';
import { Post } from './Pages/Post';
import { Login } from './Pages/Login';
import { CreatePost } from './Pages/CreatePost';
import { Createaccount } from './Pages/Createaccount';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/editpost" />
      </Routes>
    </div>
  );
}

export default App;
