import './link.scss';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

const Link = ({ ...props }: RouterLinkProps) => {
  return <RouterLink {...props} className="link"></RouterLink>;
};

export default Link;
