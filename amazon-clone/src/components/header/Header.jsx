import React from 'react'
import Icon from '../../assets/amazon.ico';

const Header = () => {
  return (
    <div>
      <div><img src={Icon} alt="Amazon Logo" />
      <h2>Location</h2></div>
      <div>
        <input type="text" placeholder='Enter Search term'/>

      </div>
      <div>
    <ul>
      <li>Search</li>
      <li>Account</li>
      <li>Cart</li>
    </ul>

      </div>
    </div>
  )
}

export default Header
