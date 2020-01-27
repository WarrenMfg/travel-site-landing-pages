import React from 'react';
import styles from '../css/PropertyAmenitiesCSS.js';


class PropertyAmenities extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <styles.propertyAmenitiesContainer>
        <h4>Property amenities</h4>
        <styles.grid>
          <styles.left>
            {this.props.amenityIcon1 ?
              null :
              null
            }
          </styles.left>

          <styles.right>

          </styles.right>
        </styles.grid>
      </styles.propertyAmenitiesContainer>
    );
  }
}

export default PropertyAmenities;