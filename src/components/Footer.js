import React from "react";
import small_logo from "../images/small_logo.png";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={small_logo} />
        </div>
        <div>
          <h3>Document Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Order</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Threads</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
