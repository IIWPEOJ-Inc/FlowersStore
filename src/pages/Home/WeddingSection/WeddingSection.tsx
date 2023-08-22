import './WeddingSection.scss';
import { TertiaryButton } from '../../../components/TertiaryButton/TertiaryButton';
import React from 'react';

export const WeddingSection = () => {
  return (
    <section id="wedding-section">
      <div className="content">
        <span>SERVICE</span>
        <h2>Wedding & Event Decor</h2>
        <div className="description">
          Let our team of expert florists and designers create stunning, on-trend
          <br />
          floral décor for your special day. Trust us to bring your vision to life.
        </div>
        <TertiaryButton text={'INQUIRE NOW'} status={''} />
      </div>
    </section>
  );
};
