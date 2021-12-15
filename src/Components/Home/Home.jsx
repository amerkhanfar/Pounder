import React from 'react';
import Navbar from '../Navbar/navbar';
import './Home.css';

const Home = ({ totalItems }) => {
  return (
    <div>
      <div className="overlay">
        <div className="bck">
          <ul className="list">
            <div>
              <li>
                <a href="/">
                  <i class="fas fa-hamburger"></i>
                </a>
              </li>
            </div>
            <div className="contain">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/products">Order</a>
              </li>
            </div>

            <div>
              <li>
                <a href="/products">Order Now</a>
              </li>
            </div>
          </ul>

          <div>
            <a href="/products" className="bt">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
