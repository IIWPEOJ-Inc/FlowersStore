import './burgerMenu.scss';
import { Button, ButtonTypes } from '../../../shared/components/buttons/buttons';
import { hideModal, showModal } from '../modal/modalSlice';
import { useDispatch } from 'react-redux';
import CloseButton from './assets/closeButton.svg';
import Facebook from '../../../shared/assets/facebook.svg';
import Instagram from '../../../shared/assets/instagram.svg';
import Link from '../link/link';
import Pinterest from '../../../shared/assets/pinterest.svg';
import Telegram from '../../../shared/assets/telegram.svg';
import Twitter from '../../../shared/assets/twitter.svg';

interface BurgerMenuProps {
  isActive: boolean;
  callback: () => void;
}

export const BurgerMenu = ({ isActive, callback }: BurgerMenuProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    callback();
    dispatch(hideModal());
  };
  const menuClick = () => {
    callback();
    dispatch(showModal());
  };

  return (
    <div className={`burger-menu ${isActive ? '' : 'closed'}`}>
      <div className="grid-sections">
        <div className="menu-section">
          <div className="close-cell">
            <Button onClick={handleClick} buttonType={ButtonTypes.HeaderButton}>
              <img className="icon" src={CloseButton} alt="CloseButton" />
            </Button>
          </div>
          <div className="menu-cell">
            <Button onClick={menuClick} buttonType={ButtonTypes.HeaderButton}>
              <h5>Sign in</h5>
            </Button>
          </div>
          <div className="menu-cell">
            <Button onClick={handleClick} buttonType={ButtonTypes.HeaderButton}>
              <Link to={'/'}>
                <h5>Shop</h5>
              </Link>
            </Button>
          </div>
          <div className="menu-cell">
            <Button onClick={handleClick} buttonType={ButtonTypes.HeaderButton}>
              <Link to={'/'}>
                <h5>Service</h5>
              </Link>
            </Button>
          </div>
          <div className="menu-cell">
            <Button onClick={handleClick} buttonType={ButtonTypes.HeaderButton}>
              <Link to={'/'}>
                <h5>Contact</h5>
              </Link>
            </Button>
          </div>
          <div className="menu-cell">
            <Button onClick={handleClick} buttonType={ButtonTypes.HeaderButton}>
              <Link to={'/'}>
                <h5>About us</h5>
              </Link>
            </Button>
          </div>
          <div className="menu-cell">
            <div className="links-cell">
              <Button onClick={handleClick} buttonType={ButtonTypes.HeaderButton}>
                <Link to={'/'}>Shipping & returns</Link>
              </Button>
              <Button onClick={handleClick} buttonType={ButtonTypes.HeaderButton}>
                <Link to={'/'}> Terms & conditions</Link>
              </Button>
              <Button onClick={handleClick} buttonType={ButtonTypes.HeaderButton}>
                <Link to={'/'}>Privacy policy</Link>
              </Button>
            </div>
          </div>
          <div className="menu-cell">
            <img className="icon" src={Instagram} alt="Instagram" />
            <img className="icon" src={Pinterest} alt="Pinterest" />
            <img className="icon" src={Facebook} alt="Facebook" />
            <img className="icon" src={Twitter} alt="Twitter" />
            <img className="icon" src={Telegram} alt="Telegram" />
          </div>
        </div>
      </div>
    </div>
  );
};
