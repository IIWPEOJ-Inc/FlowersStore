﻿import './weddingSection.scss';
import { TertiaryButton } from '../../../shared/components/buttons/buttons';

export const WeddingSection = () => {
  return (
    <section id="wedding-section">
      <div className="img-wedding">
        <div className="content-container">
          <div className="headings-container">
            <div className="title-container">
              <div className="overline">service</div>
              <h2>Wedding & Event Decor</h2>
            </div>
            <p>
              Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision
              to life.
            </p>
          </div>
          <TertiaryButton buttonType="button">INQUIRE NOW</TertiaryButton>
        </div>
      </div>
    </section>
  );
};
