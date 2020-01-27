import React from 'react';
import styles from '../css/PropertyAmenitiesCSS.js';


class PropertyAmenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenityIcons: ['fas fa-biking', 'fas fa-fish', 'fas fa-ice-cream', 'fas fa-swimmer', 'fas fa-volleyball-ball', 'fas fa-caravan', 'fas fa-glass-martini-alt', 'fas fa-plane']
    };
  }

  render() {
    return (
      <styles.propertyAmenitiesContainer>
        <h4>Property amenities</h4>
        <styles.columns>
          {this.props.amenityIcon0 ?
            <p><i className={this.state.amenityIcons[0]}></i>{this.props.amenityCopy0.split('.')[0]}</p> :
            null
          }
          {this.props.amenityIcon1 ?
            <p><i className={this.state.amenityIcons[1]}></i>{this.props.amenityCopy1.split('.')[0]}</p> :
            null
          }
          {this.props.amenityIcon2 ?
            <p><i className={this.state.amenityIcons[2]}></i>{this.props.amenityCopy2.split('.')[0]}</p> :
            null
          }
          {this.props.amenityIcon3 ?
            <p><i className={this.state.amenityIcons[3]}></i>{this.props.amenityCopy3.split('.')[0]}</p> :
            null
          }

          {this.props.amenityIcon4 ?
            <p><i className={this.state.amenityIcons[4]}></i>{this.props.amenityCopy4.split('.')[0]}</p> :
            null
          }
          {this.props.amenityIcon5 ?
            <p><i className={this.state.amenityIcons[5]}></i>{this.props.amenityCopy5.split('.')[0]}</p> :
            null
          }
          {this.props.amenityIcon6 ?
            <p><i className={this.state.amenityIcons[6]}></i>{this.props.amenityCopy6.split('.')[0]}</p> :
            null
          }
          {this.props.amenityIcon7 ?
            <p><i className={this.state.amenityIcons[7]}></i>{this.props.amenityCopy7.split('.')[0]}</p> :
            null
          }
        </styles.columns>

        <styles.showMore>Show more</styles.showMore>
      </styles.propertyAmenitiesContainer>
    );
  }
}

export default PropertyAmenities;

// this.props.amenityCopy0.split('.')[0].length > 20 ? this.props.amenityCopy0.split('.')[0].slice(0, 21) : this.props.amenityCopy0.split('.')[0]