﻿import './AboutUsSection.scss';
import { SecondaryButton } from '../../../components/SecondaryButton/SecondaryButton';
import React from 'react';

export const AboutUsSection = () => {
  return (
    <section id="about-us-section">
      <div className="left-side">
        <div className="content">
          <h2>About us</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="content">
          <span>OUR STORY</span>
          <h3>Montreal LuxeBouquets</h3>
          <div className="description">
            We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers,
            which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house
            plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers,
            plants and gifts the same or next day. Ordering flowers online has never been easier.
          </div>
          <SecondaryButton text={'LEARN MORE'} status={''} />
        </div>
      </div>
    </section>
  );
};