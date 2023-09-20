import './signUp.scss';
import { Modal, ModalType } from '../../shared/components/modal/modal';
import { PrimaryButton, SecondaryButton } from '../../shared/components/buttons/buttons';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Apple from '../../shared/assets/apple.svg';
import Google from '../../shared/assets/google.svg';
import Input from '../../shared/components/input/input';
import Link from '../../shared/components/link/link';

interface SignUpProps {
  phone: string;
}

export const SignUp = () => {
  const [pageNumber, setPageNumber] = useState(3);
  const { register } = useForm<SignUpProps>();

  const step1 = (
    <>
      <h2>Greetings! Welcome to luxury gift shop.</h2>
      <h6 className="step1-h6">Use your mobile number to sign up or log in</h6>
      <form className="phone-form">
        <Input
          {...register('phone', {
            pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
            required: true,
          })}
          placeholder={'+380 XX XXX XX XX'}
        />
        <PrimaryButton buttonType={'button'}>continue</PrimaryButton>
      </form>
      <div className="divide-lines-flex">
        <div className="divide-line"></div>
        <div className="caption">or</div>
        <div className="divide-line"></div>
      </div>
      <h6 className="step1-h6">Instantly login or sign up via Google</h6>
      <div className="bottom-buttons">
        <SecondaryButton buttonType={'button'}>
          <div className="button-content">
            <img className="icon" src={Google} alt="Google" />
            <div>continue with google</div>
          </div>
        </SecondaryButton>
        <SecondaryButton buttonType={'button'}>
          <div className="button-content">
            <img className="icon" src={Apple} alt="Apple" />
            <div>continue with apple</div>
          </div>
        </SecondaryButton>
      </div>
    </>
  );
  const step2 = (
    <>
      <div className="top-headers">
        <h2>Sign up</h2>
        <h6>Become a member and enjoy personalized gift recommendations, fast checkout, and more.</h6>
        <h6>Enter code from sms</h6>
      </div>
      <form className="phone-form">
        <Input
          {...register('phone', {
            pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
            required: true,
          })}
          placeholder={'XX XX XX'}
        />
        <PrimaryButton buttonType={'button'}>Join us</PrimaryButton>
      </form>
      <div className="links-flex">
        <Link to={'/'}>Didn't receive a code?</Link>
        <Link to={'/'}>Resend code</Link>
      </div>
    </>
  );
  const step3 = (
    <>
      <div className="top-headers">
        <h2>Reset your password</h2>
        <h6>Please provide your phone number below to receive a code for restoring access to your account</h6>
        <h6>Enter your mobile number</h6>
      </div>
      <form className="phone-form">
        <Input
          {...register('phone', {
            pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
            required: true,
          })}
          placeholder={'+380 XX XXX XX XX'}
        />
        <PrimaryButton buttonType={'button'}>continue</PrimaryButton>
      </form>
    </>
  );

  const content = <>{pageNumber === 1 ? step1 : pageNumber === 2 ? step2 : step3}</>;

  return (
    <Modal modalType={ModalType.SignUp}>
      <div id="sign-up-content">
        {content}
        <div className="bottom-links">
          <Link to={'/'}>
            <div className="underline caption">Privacy policy</div>
          </Link>
          <div className="caption">|</div>
          <Link to={'/'}>
            <div className="underline caption">Terms and Conditions</div>
          </Link>
        </div>
      </div>
    </Modal>
  );
};
