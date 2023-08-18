<<<<<<< HEAD
import './Header.scss';
import React from 'react';
import burgerMenu from './assets/burgerMenu.svg';
import shopBag from './assets/shopBag.svg';

export const Header = () => {
  return (
    <header>
      <div className="left-buttons">
        <img src={burgerMenu} alt="burger-menu" className="mobile-only" />
        <div className="left-button desktop-only">Shop</div>
        <div className="left-button desktop-only">Contact</div>
      </div>
      <div className="right-buttons">
        <img src={shopBag} alt="shop-bag" className="mobile-only" />
        <div className="sign-in-button desktop-only">Sign In</div>
        <div className="cart-button desktop-only">Cart</div>
      </div>
    </header>
  );
=======
export const Header = () => {
  return <div>Header</div>;
>>>>>>> fc4a23e (initial commit)
};
