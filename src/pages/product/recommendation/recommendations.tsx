import './recommendations.scss';
import { RecommendationContent } from './components/recommendationContent';
import Link from '../../../shared/components/link/link';
import rec1 from '../assets/rec1.png';
import rec2 from '../assets/rec2.png';
import rec3 from '../assets/rec3.png';
import rec4 from '../assets/rec4.png';

export const Recommendations = () => {
  return (
    <section id="recommendation">
      <div className="also-like">
        <h3>You may also like…</h3>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <RecommendationContent
            product={
              <Link to="/">
                <img src={rec1} alt="product" />
              </Link>
            }
            name="Rattan Grapefruit"
            price="48"
          ></RecommendationContent>
        </div>
        <div className="grid-item">
          <RecommendationContent
            product={
              <Link to="/">
                <img src={rec2} alt="product" />
              </Link>
            }
            name="Rattan Grapefruit"
            price="48"
          ></RecommendationContent>
        </div>
        <div className="grid-item">
          <RecommendationContent
            product={
              <Link to="/">
                <img src={rec3} alt="product" />
              </Link>
            }
            name="Rattan Grapefruit"
            price="48"
          ></RecommendationContent>
        </div>
        <div className="grid-item">
          <RecommendationContent
            product={
              <Link to="/">
                <img src={rec4} alt="product" />
              </Link>
            }
            name="Rattan Grapefruit"
            price="48"
          ></RecommendationContent>
        </div>
      </div>
    </section>
  );
};
