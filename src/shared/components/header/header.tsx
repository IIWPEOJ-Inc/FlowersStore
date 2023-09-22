import './header.scss';
import { SignUp } from '../../../pages/sign-up/signUp';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import Link from '../link/link';
import burgerMenu from '../../assets/burgerMenu.svg';
import shopBag from '../../assets/shopBag.svg';

export const Header = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 992 });

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
      <Link to="/">
        <img src={burgerMenu} alt="burger-menu" className="icon" loading="lazy" />
      </Link>
    </div>
  );

  // onClick={() => {
  //   setModalIsActive(true);
  //   console.log(modalIsActive);
  // }}

  const rightContent = isDesktop ? (
    <div className="header-grid">
      <div className="grid-right-items">
        <div className="grid-right-item">
          <Link to="/">Sign In</Link>
          {/* сделать компонент для баттона modalbutton */}
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
    <header className={modalIsActive ? 'overflow' : ''}>
      <div className="header-grid">
        {leftContent}
        {rightContent}
      </div>
      <SignUp />
    </header>
  );
};
