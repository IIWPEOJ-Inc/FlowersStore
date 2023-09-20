import './subscriptionPlan.scss';
import { PrimaryButton } from '../../../../../shared/components/buttons/buttons';
interface SubscriptionPlanProps {
  image: string;
  planName: string;
  children: React.ReactNode[];
}

export const SubscriptionPlan = ({ image, planName, children }: SubscriptionPlanProps) => {
  return (
    <div className="subscription-plan">
      <div className="top-content">
        <img src={image} alt="" loading="lazy" />
        <div className="right-side-grid">
          <span className="subtitle">{planName}</span>
          <ul>
            {children.map((item, index) => (
              <li key={index + 1}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <PrimaryButton buttonType={'button'}>select</PrimaryButton>
    </div>
  );
};
