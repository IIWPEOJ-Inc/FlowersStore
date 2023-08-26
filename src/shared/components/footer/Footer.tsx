import './Footer.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Link from './../link/link';
import Pinterest from '../../assets/pinterest.svg';
import PrimaryButton from '../buttons/PrimaryButton';
import Telegram from '../../assets/telegram.svg';
import Twitter from '../../assets/twitter.svg';

type Props = {
  email: string;
};

const Footer = () => {
  const { register, handleSubmit } = useForm<Props>();
  const onSubmit: SubmitHandler<Props> = (data) => console.log(data);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 479 });

  const footerMedia = isDesktop ? 'footer-desktop' : isMobile ? 'footer-mobile' : 'footer-tablet';
  return (
    <footer className={footerMedia}>
      <div className="footer-grid-item border-top-bottom border-right">
        <div className="content-container">
          <p>
            Remember to offer beautiful flowers
            <br />
            from Kyiv Florist Studio Valentines
            <br />
            Day, Mothers Day, Christmas....
            <br />
            Reminds you 7 days before. No
            <br />
            spam or sharing your address
          </p>
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form className="remind-form" onSubmit={handleSubmit(onSubmit)}>
            <input
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
      <div className="footer-grid-item border-top-bottom border-right">
        <div className="content-container">
          <h4>Contact Us</h4>
          <div className="links-grid">
            <div className="link-items-grid">
              <h5>Address</h5>
              <Link to="/">360 Victoria Ave, Westmount, Montreal</Link>
            </div>
            <div className="link-items-grid">
              <h5>Phone</h5>
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
      <div className="footer-grid-item border-top-bottom border-right">
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
      <div className="footer-grid-item border-top-bottom">
        <div className="content-container">
          <h4>About Us</h4>
          <div className="link-items-grid">
            <Link to="/">Our Story</Link>
            <Link to="/">Blog</Link>
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
