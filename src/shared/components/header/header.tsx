import './header.scss';
import { BurgerMenu } from '../burgerMenu/burgerMenu';
import { Button, ButtonTypes } from '../buttons/buttons';
import { showModal } from '../modal/modalSlice';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import Link from '../link/link';
import burgerMenu from '../../assets/burgerMenu.svg';
import shopBag from '../../assets/shopBag.svg';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const dispatch = useDispatch();
  const closeBurgerMenu = () => {
    setIsActive(!isActive);
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
      <Button onClick={() => setIsActive(!isActive)} buttonType={ButtonTypes.HeaderButton}>
        <img src={burgerMenu} alt="burger-menu" className="icon" loading="lazy" />
      </Button>
    </div>
  );

  const rightContent = isDesktop ? (
    <div className="header-grid">
      <div className="grid-right-items">
        <div className="grid-right-item">
          <Button onClick={() => dispatch(showModal())} buttonType={ButtonTypes.HeaderButton}>
            Sing Up
          </Button>
        </div>
        <div className="grid-right-item">
          <Link to="/">Cart</Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="grid-right-item">
      <Link to="/">
        <img src={shopBag} alt="shopping-bag" className="icon" loading="lazy" />
      </Link>
    </div>
  );

  return (
    <header>
      {isDesktop ? <></> : <BurgerMenu isActive={isActive} callback={closeBurgerMenu} />}
      <div className="header-grid">
        {leftContent}
        {rightContent}
      </div>
    </header>
  );
};
