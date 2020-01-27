import React from 'react';
import styles from '../css/GoodToKnowCSS.js';
import HotelClass from './HotelClass.jsx';

class GoodToKnow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <styles.goodToKnowContainer>
        <h4>Good to know</h4>
        <h5>HOTEL CLASS</h5>
        <HotelClass
          hotelClass={this.props.hotelClass}
        />

        <h5>HOTEL STYLE</h5>
        <styles.hotelStyleContainer>
          {this.props.hotelStyle ?
            this.props.hotelStyle.split('\n').map((sentence, i) => <p key={i}>{sentence.split(' ').splice(0, 2).join(' ')}</p>) :
            null
          }
        </styles.hotelStyleContainer>
      </styles.goodToKnowContainer>
    );
  }
}

export default GoodToKnow;