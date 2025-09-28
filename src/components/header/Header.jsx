import React, { useContext } from "react";
import Icon from "../../assets/amazon.ico";
import style from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";

import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return (item.amount || 1) + amount;
  }, 0);

  return (
    <>
      {" "}
      <section className={style.fixed}>
        <section>
          <div className={style.header_container}>
            {/* logo section */}
            <div className={style.logo_container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              <div className={style.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>USA</span>
                </div>
              </div>
            </div>

            {/* search section */}
            <div className={style.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" />
              <button type="button">
                <BsSearch size={20} />
              </button>
            </div>

            {/* other section */}
            <div className={style.order_container}>
              <Link to="" className={style.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => auth.signOut()}
                    >
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span>Sign Out</span>
                    </div>
                  ) : (
                    <Link to="/auth">
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                    </Link>
                  )}
                </div>
              </Link>
              <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className={style.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;
