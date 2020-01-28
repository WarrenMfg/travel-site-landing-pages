import React from 'react';
import styles from '../css/HotelLinksCSS.js';

class HotelLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <styles.hotelLinksContainer>
          <h4>Hotel links</h4>
          <styles.a href="https://www.orbitz.com/" target="_blank">
            <i className="fas fa-globe-americas"></i><span> Visit hotel website </span><i className="fas fa-external-link-alt"></i>
          </styles.a>

          {this.props.isSpecialOffered ?
            <styles.a href="https://www.orbitz.com/" target="_blank">
              <i className="fas fa-tag"></i><span> Special Offer: </span> {this.props.special.split('.')[0]}
            </styles.a> :
            null
          }

          <styles.a href="https://www.orbitz.com/" target="_blank">
            <i className="fas fa-tag"></i> Hotel deals <i className="fas fa-external-link-alt"></i>
          </styles.a>
        </styles.hotelLinksContainer>
      </div>
    );
  }
}

export default HotelLinks;