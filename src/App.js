import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import Products from './Components/Products/products';
import Navbar from './Components/Navbar/navbar';
import Commerce from '@chec/commerce.js';
import Cart from './Components/Cart/cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories/categories';
import Checkout from './Components/CheckoutForm/Checkout/checkout';
import Landing from './Components/Landing/landing';
import Home from './Components/Home/Home';
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId, quantity) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home totalItems={cart.total_items} />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<Landing totalItems={cart.total_items} />}
          ></Route>

          <Route
            exact
            path="/products"
            element={
              <Products
                products={products}
                onAddToCart={handleAddToCart}
                totalItems={cart.total_items}
              />
            }
          ></Route>

          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                totalItems={cart.total_items}
              />
            }
          ></Route>

          <Route
            exact
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                error={errorMessage}
                totalItems={cart.total_items}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
