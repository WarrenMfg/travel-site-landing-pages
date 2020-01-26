import React from 'react';
import {Global, css, jsx} from '@emotion/core';
import styles from '../css/RatingsCSS.js';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let averageWords = 'Very good';
    switch (true) {
    case this.props.average <= 1:
      averageWords = 'Look elsewhere';
      break;
    case this.props.average <= 2:
      averageWords = 'Think again';
      break;
    case this.props.average <= 3:
      averageWords = 'Fair';
      break;
    case this.props.average <= 4:
      averageWords = 'Very good';
      break;
    case this.props.average <= 5:
      averageWords = 'Excellent';
      break;
    }

    return (
      <styles.ratingsContainer>
        <styles.averageNum>{this.props.average}</styles.averageNum>
        <styles.averageLink>
          <styles.averageWords>{averageWords}</styles.averageWords>
          <RatingsCircles rating={this.props.average} />
        </styles.averageLink>
      </styles.ratingsContainer>
    );
  }
}

export default Ratings;