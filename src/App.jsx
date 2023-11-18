import React, { useState } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productdetail from './components/productdetail';
import Search from './components/Search';
import Cart from './components/Cart';
import { items } from './components/Data';

const App = () => {
  const [data, setdata] = useState([...items])
  const [cart, setcart] = useState([])

  return (
    <Router>
      <Navbar cart={cart} setdata={setdata} />
      <Routes>
      {/* <Route path="/" render={() => <Product cart={cart} setcart={setcart} items={data} />} /> */}

        <Route path="/" element={<Product cart={cart} setcart={setcart} items={data} />} />
        <Route path="/product/:id" element={<Productdetail items={data} cart={cart} setcart={setcart} />} />
        <Route path="/search/:term" element={<Search cart={cart} setcart={setcart} />} />
        <Route path="/cart" element={<Cart  cart={cart} setcart={setcart} />} />
      </Routes>
    </Router>
  );
};

export default App;
