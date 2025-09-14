import React from "react";
import Icon from "../../assets/amazon.ico";
import style from "./header.module.css";
const Header = () => {
  return (
    <div className={style.header_container}>
      <div className={style.icon_location}>
        <a href="/">
          {/* "https://pngimg.com/image/61232"  */}
          <img src={Icon} alt="Amazon Logo" />
        </a>

        {/*  https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API*/}
        <span>
          <p>Deliverted to</p> <span>Ethiopia</span>
        </span>
      </div>
      <div className={style.header_input}>
        <select name="" id="">
          <option value="">All</option>
        </select>
        <input type="text" placeholder="Search Product" />
        {/* icon  */}
      </div>
      <div className={style.header_account_cart}>
        <ul>
          <li>Sign in</li>
          <li>Orders</li>
          <li></li>
          <li>Account</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
