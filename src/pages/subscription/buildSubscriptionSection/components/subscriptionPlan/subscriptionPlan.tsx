import './subscriptionPlan.scss';
import { PrimaryButton } from '../../../../../shared/components/buttons/buttons';

interface SubscriptionPlanProps {
  image: string;
  planName: string;
  options: string[];
}

export const SubscriptionPlan = ({ image, planName, options }: SubscriptionPlanProps) => {
  return (
    <div className="subscription-plan">
      <div className="top-content">
        <img src={image} alt="" />
        <div className="right-side-grid">
          <span className="subtitle">{planName}</span>
          <ul>
            {options.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <PrimaryButton buttonType={'button'}>select</PrimaryButton>
    </div>
  );
};
