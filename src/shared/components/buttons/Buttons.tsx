import './Buttons.scss';

interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export const PrimaryButton = ({ buttonType, children }: ButtonProps) => {
  return (
    <button className="primary-button" type={buttonType}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ buttonType, children }: ButtonProps) => {
  return (
    <button className="secondary-button" type={buttonType}>
      {children}
    </button>
  );
};

export const TertiaryButton = ({ buttonType, children }: ButtonProps) => {
  return (
    <button className="tertiary-button" type={buttonType}>
      {children}
    </button>
  );
};
