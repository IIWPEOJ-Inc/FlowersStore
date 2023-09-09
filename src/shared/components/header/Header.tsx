import './Header.scss';
import { useMediaQuery } from 'react-responsive';
import Link from '../link/Link';
import burgerMenu from '../../assets/burgerMenu.svg';
import shopBag from '../../assets/shopBag.svg';

export const Header = () => {
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
        <img src={burgerMenu} alt="burger-menu" className="icon" />
      </Link>
    </div>
  );

  const rightContent = isDesktop ? (
    <div className="header-grid">
      <div className="grid-right-items">
        <div className="grid-right-item">
          <Link to="/">Sign In</Link>
        </div>
        <div className="grid-right-item">
          <Link to="/">Cart</Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="grid-right-item">
      <Link to="/">
        <img src={shopBag} alt="shopping-bag" className="icon" />
      </Link>
    </div>
  );

  return (
    <header>
      <div className="header-grid">
        {leftContent}
        {rightContent}
      </div>
    </header>
  );
};
