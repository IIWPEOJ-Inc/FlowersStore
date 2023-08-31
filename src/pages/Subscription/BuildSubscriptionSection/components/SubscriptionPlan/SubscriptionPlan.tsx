import './SubscriptionPlan.scss';
import { PrimaryButton } from '../../../../../components/PrimaryButton/PrimaryButton';
import React from 'react';

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
          <span>{planName}</span>
          <ul>
            {options.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <PrimaryButton text={'select'} status={''} />
    </div>
  );
};
