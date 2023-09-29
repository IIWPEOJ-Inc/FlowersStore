import './shoppingCart.scss';
import { Button, ButtonTypes } from '../../shared/components/buttons/buttons';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { hideShoppingCartModal } from './shoppingCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CloseButton from './assets/closeButton.svg';
import Flower from './assets/flower.jpeg';

export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.shoppingCart.isActive);
  return (
    <div onClick={() => dispatch(hideShoppingCartModal())} aria-hidden="true" className={`shopping-cart-modal ${isActive ? '' : 'closed'}`}>
      <div></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        aria-hidden="true"
        className="shopping-cart-content"
      >
        <div className="header-section">
          <h6>Shopping cart</h6>
          <Button onClick={() => dispatch(hideShoppingCartModal())} buttonType={ButtonTypes.HeaderButton}>
            <img className="icon" src={CloseButton} alt="CloseButton" />
          </Button>
        </div>
        <div className="flower-section">
          <div className="left-elements">
            <img src={Flower} alt="Flower" />
            <div className="description">
              <div className="subtitle">Rosy Delight</div>
              <div>Quantity (1)</div>
              <div className="subtitle">$100</div>
            </div>
          </div>
          <Button buttonType={ButtonTypes.HeaderButton}>Remove</Button>
        </div>
        <div className="subtotal-section">
          <div className="subtitle">Subtotal</div>
          <h5>$100.00</h5>
        </div>
        <div className="gift-message-section">
          <div>Gift message</div>
          <div className="message"></div>
        </div>
        <div className="note-section caption">
          Shipping & taxes calculated at checkout <br></br> Free standard shipping within Montreal
        </div>
        <Button buttonType={ButtonTypes.PrimaryButton}>Check out</Button>
      </div>
    </div>
  );
};
