import './Link.scss';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  to: string;
  children: React.ReactNode;
}

const Link = ({ to, children }: Props) => {
  return (
    <RouterLink to={to} className="link">
      {children}
    </RouterLink>
  );
};

export default Link;
