import './ToContactUsSection.scss';
import { PrimaryButton } from '../../../shared/components/buttons/Buttons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import ContactUsImage from './assets/contactUsImage.jpeg';
import Facebook from '../../../shared/assets/facebook.svg';
import Input from '../../../shared/components/input/Input';
import Instagram from '../../../shared/assets/instagram.svg';
import Link from '../../../shared/components/link/Link';
import Phone from './assets/phone.svg';
import PinDrop from './assets/pinDrop.svg';
import Pinterest from '../../../shared/assets/pinterest.svg';
import Telegram from '../../../shared/assets/telegram.svg';
import Twitter from '../../../shared/assets/twitter.svg';

type Props = {
  phone: string;
};

export const ToContactUsSection = () => {
  const { register, handleSubmit } = useForm<Props>();
  const onSubmit: SubmitHandler<Props> = (data) => console.log(data);
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const leftSection = (
    <div className="left-section">
      <div className="contact-us-container">
        <h2>To Contact Us</h2>
        <div className="form-container">
          <div className="subtitle">We will call you back</div>
          <form className="phone-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('phone', {
                pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
                required: true,
              })}
              placeholder="+1 438 XXX XX XX"
            />
            <PrimaryButton buttonType="submit">BOOK A CALL</PrimaryButton>
          </form>
        </div>
      </div>
      <div className="contacts-container">
        <div className="grid-item">
          <div className="title-container">
            <h3>Phone</h3>
          </div>
          <div className="phone-container">
            <div className="icon-container ">
              <img src={Phone} alt="Phone" className="icon" />
              <Link to="/tel">+1 438 XXX XX XX</Link>
            </div>
            <div className="icon-container ">
              <img src={Phone} alt="Phone" className="icon" />
              <Link to="/tel">+1 438 XXX XX XX</Link>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="title-container">
            <h3>Address</h3>
          </div>
          <div className="address-container">
            <div className="overline">opening hours: 8 to 11 p.m.</div>
            <div className="icon-container ">
              <img src={PinDrop} alt="pin-drop" className="icon" />
              <Link to="/geo">360 Victoria Ave, Montreal</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const rightSection = (
    <div className="right-section">
      <img src={ContactUsImage} alt="img-contact-us" className="img-contact-us" />
      <div className="grid-container">
        <div className="grid-item">
          <h3>Follow us</h3>
        </div>
        <div className="grid-item icons">
          <img src={Instagram} alt="instagram" className="icon" />
          <img src={Pinterest} alt="pinterest" className="icon" />
          <img src={Facebook} alt="facebook" className="icon" />
          <img src={Twitter} alt="twitter" className="icon" />
          <img src={Telegram} alt="telegram" className="icon" />
        </div>
      </div>
    </div>
  );
  return (
    <section id="to-contact-us-section">
      {isDesktop ? (
        <>
          {leftSection}
          {rightSection}
        </>
      ) : (
        <>
          {rightSection}
          {leftSection}
        </>
      )}
    </section>
  );
};
