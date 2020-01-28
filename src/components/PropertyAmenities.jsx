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
            <div>
              <i className={this.state.amenityIcons[0]}></i><p>{this.props.amenityCopy0.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.amenityIcon1 ?
            <div>
              <i className={this.state.amenityIcons[1]}></i><p>{this.props.amenityCopy1.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.amenityIcon2 ?
            <div>
              <i className={this.state.amenityIcons[2]}></i><p>{this.props.amenityCopy2.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.amenityIcon3 ?
            <div>
              <i className={this.state.amenityIcons[3]}></i><p>{this.props.amenityCopy3.split('.')[0]}</p>
            </div> :
            null
          }

          {this.props.amenityIcon4 ?
            <div>
              <i className={this.state.amenityIcons[4]}></i><p>{this.props.amenityCopy4.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.amenityIcon5 ?
            <div>
              <i className={this.state.amenityIcons[5]}></i><p>{this.props.amenityCopy5.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.amenityIcon6 ?
            <div>
              <i className={this.state.amenityIcons[6]}></i><p>{this.props.amenityCopy6.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.amenityIcon7 ?
            <div>
              <i className={this.state.amenityIcons[7]}></i><p>{this.props.amenityCopy7.split('.')[0]}</p>
            </div> :
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