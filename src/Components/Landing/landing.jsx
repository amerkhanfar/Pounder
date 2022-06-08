import React from 'react';
import Navbar from '../Navbar/navbar';
import './landing.modules.css';

const Landing = ({ totalItems }) => {
  return (
    <div>
      <Navbar totalItems={totalItems} />
      <main>
        <div class="title" id="about">
          <h1>About Us</h1>
        </div>

        <div class="about-us-container">
          <div className="aimage-container">
            <img
              src="https://scontent.famm6-1.fna.fbcdn.net/v/t39.30808-6/220292879_126083203012522_3362942515008228384_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=IceEHMEymzIAX9naC8_&_nc_ht=scontent.famm6-1.fna&oh=00_AT_noLdsOm7k4eV-qOWFo4PnucEMbr3bVlCzeaCnPmFHBA&oe=61C02FF3"
              class="about-img"
            />
          </div>

          <div className="talk-about">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              aspernatur cumque fugit ducimus dolores sint dignissimos, ea,
              perspiciatis vitae placeat repellendus quidem illum ex, totam odit
              corporis quam ad nam commodi corrupti cupiditate esse. Excepturi
              facere soluta ratione nemo optio.
            </p>
          </div>
        </div>
      </main>

      <div class="section3">
        <div class="amer">
          <svg
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
              class="amer1"
            ></path>
          </svg>
        </div>
        <div class="contact">
          <div class="information">
            <h1>Information</h1>
            <p>
              <i class="fas fa-map-marker-alt"></i>
              <span>Address: Omar bin ekremah Abdoun, 11183</span>
            </p>

            <p>
              <i class="fas fa-clock"></i>
              <span class="one">Saturday - Wednesday: 9AM-12AM</span>
              <span class="time">Thursday - Friday: 9AM-1AM</span>
            </p>

            <p>
              <i class="fas fa-phone"></i>
              <span>0771199088</span>
            </p>

            <div class="social">
              <a href="https://www.facebook.com/Pounder.inc/">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/pounder.inc/?hl=en">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2738540956416!2d35.88205731479845!3d31.95346653282572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca11931ed8fa5%3A0xf5f9bced7c618f3e!2sPOUNDER%20by%20Alee!5e0!3m2!1sen!2sjo!4v1636541344240!5m2!1sen!2sjo"
              width="400"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <section class="section4" id="contact">
        <h1 class="section4-heading">Contact</h1>
        <div class="form-container">
          <img
            src="../../assets/form-img.png"
            alt="contact us"
            class="form-img"
          />
          <form action="" class="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
        <p class="copyright">
          Copyright &copy; AmerKhanfar All rights Reserved
        </p>
        <div class="social">
          <a href="https://www.facebook.com/Pounder.inc/" target="_blank">
            <i class="fab fa-facebook-square black"></i>
          </a>
          <a
            href="https://www.instagram.com/pounder.inc/?hl=en"
            target="_blank"
          >
            <i class="fab fa-instagram black"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Landing;
