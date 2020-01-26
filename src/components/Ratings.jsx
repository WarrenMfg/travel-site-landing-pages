import React from 'react';
import {jsx} from '@emotion/core';
import styles from '../css/RatingsCSS.js';
import RatingsCircles from './RatingsCircles.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let averageWords;
    switch (true) {
    case this.props.average <= 1:
      averageWords = 'Poor';
      break;
    case this.props.average <= 2:
      averageWords = 'Fair';
      break;
    case this.props.average <= 3:
      averageWords = 'Good';
      break;
    case this.props.average <= 4:
      averageWords = 'Excellent';
      break;
    case this.props.average <= 5:
      averageWords = 'Outstanding';
      break;
    }

    return (
      <styles.ratingsContainer>

        <styles.averageNum>{this.props.average}</styles.averageNum>

        <styles.averageLink>
          <styles.averageWords>
            {averageWords}
            <styles.reviewsLink>reviews</styles.reviewsLink>
          </styles.averageWords>
          <RatingsCircles rating={this.props.average} />
        </styles.averageLink>

        <RatingsCircles rating={this.props.location} />
        <RatingsCircles rating={this.props.cleanliness} />
        <RatingsCircles rating={this.props.service} />
        <RatingsCircles rating={this.props.value} />

      </styles.ratingsContainer>
    );
  }
}

export default Ratings;