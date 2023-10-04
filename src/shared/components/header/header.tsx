import './header.scss';
import { BurgerMenu } from '../burgerMenu/burgerMenu';
import { Button, ButtonTypes } from '../buttons/buttons';
import { showShoppingCartModal } from '../../../pages/shoppingCart/shoppingCartSlice';
import { showSignUpModal } from '../../../pages/sign-up/singUpSlice';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import Link from '../link/link';
import burgerMenu from '../../assets/burgerMenu.svg';
import shopBag from '../../assets/shopBag.svg';

export const Header = () => {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const dispatch = useDispatch();
  const closeBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  const leftContent = isDesktop ? (
    <div className="header-grid">
      <div className="grid-left-items">
        <div className="grid-left-item">
          <Link to="/">Shop</Link>
        </div>
        <div className="grid-left-item">
          <Link to="/">Contact</Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="grid-left-item">
      <Button onClick={() => setIsActiveBurgerMenu(!isActiveBurgerMenu)} buttonType={ButtonTypes.HeaderButton}>
        <img src={burgerMenu} alt="burger-menu" className="icon" loading="lazy" />
      </Button>
    </div>
  );

  const rightContent = isDesktop ? (
    <div className="header-grid">
      <div className="grid-right-items">
        <div className="grid-right-item">
          <Button onClick={() => dispatch(showSignUpModal())} buttonType={ButtonTypes.HeaderButton}>
            Sign Up
          </Button>
        </div>
        <div className="grid-right-item">
          <Button onClick={() => dispatch(showShoppingCartModal())} buttonType={ButtonTypes.HeaderButton}>
            Cart
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="grid-right-item">
      <Button onClick={() => dispatch(showShoppingCartModal())} buttonType={ButtonTypes.HeaderButton}>
        <img src={shopBag} alt="burger-menu" className="icon" loading="lazy" />
      </Button>
    </div>
  );

  return (
    <header style={{ zIndex: isActiveBurgerMenu ? 200 : '2' }}>
      {isDesktop ? <></> : <BurgerMenu isActive={isActiveBurgerMenu} callback={closeBurgerMenu} />}
      <div className="header-grid">
        {leftContent}
        {rightContent}
      </div>
    </header>
  );
};
