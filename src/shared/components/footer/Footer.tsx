import './Footer.scss';
import { PrimaryButton } from '../buttons/Buttons';
import { SubmitHandler, useForm } from 'react-hook-form';
import Facebook from '../../assets/facebook.svg';
import Input from './../input/Input';
import Instagram from '../../assets/instagram.svg';
import Link from '../link/Link';
import Pinterest from '../../assets/pinterest.svg';
import Telegram from '../../assets/telegram.svg';
import Twitter from '../../assets/twitter.svg';

type Props = {
  email: string;
};

const Footer = () => {
  const { register, handleSubmit } = useForm<Props>();
  const onSubmit: SubmitHandler<Props> = (data) => console.log(data);

  return (
    <footer>
      <div className="footer-grid-item border-1">
        <div className="content-container">
          <p>
            Remember to offer beautiful flowers from Montreal Florist Studio Valentines Day, Mothers Day, Christmas....
            <br />
            Reminds you 7 days before. No spam or sharing your address.
          </p>
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form className="remind-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('email', {
                pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
                required: true,
              })}
              placeholder="Your Email"
            />
            <PrimaryButton buttonType="submit">Remind</PrimaryButton>
          </form>
        </div>
      </div>
      <div className="footer-grid-item border-2">
        <div className="content-container">
          <h4>Contact Us</h4>
          <div className="links-grid">
            <div className="link-items-grid">
              <h5>Address:</h5>
              <Link to="/">360 Victoria Ave, Westmount, Montreal</Link>
            </div>
            <div className="link-items-grid">
              <h5>Phone:</h5>
              <Link to="/">+1 438-600-3188</Link>
            </div>
            <div className="link-items-grid">
              <h5>General Enquiry:</h5>
              <Link to="/">Montreal.Florist.Studio@gmail.com</Link>
            </div>
          </div>
          <h4>Follow Us</h4>
          <div className="links-flex">
            <Link to="/">
              <img src={Instagram} alt="Instagram" />
            </Link>
            <Link to="/">
              <img src={Pinterest} alt="Pinterest" />
            </Link>
            <Link to="/">
              <img src={Facebook} alt="Facebook" />
            </Link>
            <Link to="/">
              <img src={Twitter} alt="Twitter" />
            </Link>
            <Link to="/">
              <img src={Telegram} alt="Telegram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-grid-item border-3">
        <div className="content-container">
          <h4>Shop</h4>
          <div className="link-items-grid">
            <Link to="/">All Products</Link>
            <Link to="/">Fresh Flowers</Link>
            <Link to="/">Dried Flowers</Link>
            <Link to="/">Live Plants</Link>
            <Link to="/">Aroma Candles</Link>
            <Link to="/">Designer Vases</Link>
            <Link to="/">Freshener Diffuser</Link>
          </div>
          <h4>Service</h4>
          <div className="link-items-grid">
            <Link to="/">Flower Subscription</Link>
            <Link to="/">Wedding & Event Decor</Link>
          </div>
        </div>
      </div>
      <div className="footer-grid-item border-4">
        <div className="content-container">
          <h4>About Us</h4>
          <div className="link-items-grid">
            <Link to="/">Our Story</Link>
            <Link to="/">Blog</Link>
          </div>
          <div className="link-items-grid">
            <Link to="/">Shipping & returns</Link>
            <Link to="/">Terms & conditions</Link>
            <Link to="/">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;