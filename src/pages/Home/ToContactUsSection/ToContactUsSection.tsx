import './ToContactUsSection.scss';
import { PrimaryButton } from '../../../shared/components/buttons/Buttons';
import Facebook from '../../../shared/assets/facebook.svg';
import Instagram from '../../../shared/assets/instagram.svg';
import Phone from './assets/phone.svg';
import PinDrop from './assets/pinDrop.svg';
import Pinterest from '../../../shared/assets/pinterest.svg';
import RightImage from './assets/rightImage2.jpeg';
import Telegram from '../../../shared/assets/telegram.svg';
import Twitter from '../../../shared/assets/twitter.svg';

export const ToContactUsSection = () => {
  return (
    <section id="to-contact-us-section">
      <div className="left-side">
        <div className="top-content">
          <h2>To Contact Us</h2>
          <span>We will call you back</span>
          <div className="call-block">
            <div className="input">+380 XX XXX XX XX</div>
            <PrimaryButton buttonType="button">BOOK A CALL</PrimaryButton>
          </div>
        </div>
        <div className="bottom-content">
          <div>
            <h3>Phone</h3>
            <div className="bottom-phone-content">
              <div className="phone">
                <img src={Phone} alt="Phone" />
                +380980099777
              </div>
              <div className="phone">
                <img src={Phone} alt="Phone" />
                +380980099111
              </div>
            </div>
          </div>
          <div className="address-content ">
            <h3>Address</h3>
            <div className="bottom-address-content">
              <span>opening hours: 8 to 11 p.m.</span>
              <div className="address">
                <img src={PinDrop} alt="PinDrop" />
                15/4 Khreshchatyk Street, Kyiv
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={RightImage} alt="RightImage" />
        <div className="bottom-follow-icons">
          <div className="follow">Follow Us</div>
          <div className="icons">
            <img src={Instagram} alt="Instagram" />
            <img src={Pinterest} alt="Pinterest" />
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Telegram} alt="Telegram" />
          </div>
        </div>
      </div>
    </section>
  );
};
