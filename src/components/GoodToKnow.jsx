import React from 'react';
import styles from '../css/GoodToKnowCSS.js';
import HotelClass from './HotelClass.jsx';
import {jsx} from '@emotion/core';

class GoodToKnow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoPopup: false
    };
    this.handleInfoMouseOver = this.handleInfoMouseOver.bind(this);
    this.handleInfoMouseLeave = this.handleInfoMouseLeave.bind(this);
  }

  handleInfoMouseOver() {
    this.setState({infoPopup: true});
  }

  handleInfoMouseLeave() {
    this.setState({infoPopup: false});
  }

  render() {
    return (
      <styles.goodToKnowContainer>
        <h4>Good to know</h4>
        <h5>HOTEL CLASS <i css={styles.i} className="fas fa-info-circle" onMouseOver={this.handleInfoMouseOver} onMouseLeave={this.handleInfoMouseLeave}></i></h5>
        {this.state.infoPopup ?
          <styles.infoPopup>
            <div>
              <p>Star ratings indicate the general level of features and amenities to expect. They are provided to TripAdvisor by third-party partners such as Giata.</p>
            </div>
          </styles.infoPopup> :
          null
        }

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