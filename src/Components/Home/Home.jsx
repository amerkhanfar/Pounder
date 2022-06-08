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
                <a href="/about">About</a>
              </li>
            </div>

            <div>
              <li>
                <a href="/products" className="order">
                  Order Now
                </a>
              </li>
            </div>
          </ul>

          <div className="btn-container">
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
