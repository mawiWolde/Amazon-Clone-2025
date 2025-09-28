import React from "react";
import classes from "./footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={classes.footer}>
      <div
        className={classes.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>
      <div className={classes.linksContainer}>
        <div>
          <h3>Get to Know Us</h3>
          <a href="#">Careers</a>
          <a href="#">Amazon Newsletter</a>
          <a href="#">About Amazon</a>
          <a href="#">Accessibility</a>
          <a href="#">Sustainability</a>
          <a href="#">Press Center</a>
          <a href="#">Investor Relations</a>
          <a href="#">Amazon Devices</a>
          <a href="#">Amazon Science</a>
        </div>

        <div>
          <h3>Make Money with Us</h3>
          <a href="#">Sell on Amazon</a>
          <a href="#">Sell apps on Amazon</a>
          <a href="#">Supply to Amazon</a>
          <a href="#">Protect & Build Your Brand</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Become a Delivery Driver</a>
          <a href="#">Start a Package Delivery Business</a>
          <a href="#">Advertise Your Products</a>
          <a href="#">Self-Publish with Us</a>
          <a href="#">Become an Amazon Hub Partner</a>
        </div>

        <div>
          <h3>Amazon Payment Products</h3>
          <a href="#">Amazon Visa</a>
          <a href="#">Amazon Store Card</a>
          <a href="#">Amazon Secured Card</a>
          <a href="#">Amazon Business Card</a>
          <a href="#">Shop with Points</a>
          <a href="#">Credit Card Marketplace</a>
          <a href="#">Reload Your Balance</a>
          <a href="#">Gift Cards</a>
          <a href="#">Amazon Currency Converter</a>
        </div>

        <div>
          <h3>Let Us Help You</h3>
          <a href="#">Your Account</a>
          <a href="#">Your Orders</a>
          <a href="#">Shipping Rates & Policies</a>
          <a href="#">Amazon Prime</a>
          <a href="#">Returns & Replacements</a>
          <a href="#">Manage Your Content and Devices</a>
          <a href="#">Recalls and Product Safety Alerts</a>
          <a href="#">Registry & Gift List</a>
          <a href="#">Help</a>
        </div>
      </div>

      <div className={classes.footerBottom}>
        <div className={classes.logoSection}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
          />
          <div className={classes.locale}>
            <span>🌐 English</span>
            <span>🇺🇸 United States</span>
          </div>
        </div>
        <p className={classes.copy}>
          © 1996–2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}

export default Footer;
