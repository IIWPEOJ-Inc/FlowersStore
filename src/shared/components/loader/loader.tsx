import './loader.scss';

interface Prop {
  className?: string;
}

const Loader = ({ className }: Prop) => {
  return (
    <div className="loader-container">
      <div className={`loader ${className}`}></div>
    </div>
  );
};

export default Loader;
