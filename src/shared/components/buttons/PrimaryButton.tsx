import './PrimaryButton.scss';

interface Props {
  buttonType: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const PrimaryButton = ({ buttonType, children }: Props) => {
  return (
    <button className="primary-button" type={buttonType}>
      {children}
    </button>
  );
};

export default PrimaryButton;
