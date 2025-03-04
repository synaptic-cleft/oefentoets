import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from "./pages/Login";
import Flag1 from "./pages/Flag1";
import Flag2 from "./pages/Flag2";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/administrator" element={<Login />} />
        <Route path="/random-redirect-route-to-provide-flag" element={<Flag1 />} />
        <Route path="/logs" element={<Flag2 />} />
      </Routes>
    </Router>
  );
}

export default App;