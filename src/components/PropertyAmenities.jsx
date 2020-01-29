import React from 'react';
import styles from '../css/PropertyAmenitiesCSS.js';
import ShowMore from './ShowMore.jsx';


class PropertyAmenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenityIcons: [
        'fas fa-biking',
        'fas fa-fish',
        'fas fa-ice-cream',
        'fas fa-swimmer',
        'fas fa-volleyball-ball',
        'fas fa-caravan',
        'fas fa-glass-martini-alt',
        'fas fa-plane'
      ],
      modal: false
    };
    this.handleSeeMore = this.handleSeeMore.bind(this);
  }

  handleSeeMore() {
    this.setState(prevState => ({modal: !prevState.modal}));
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

        <styles.showMore onClick={this.handleSeeMore}>Show more</styles.showMore>

        {this.state.modal ?
          <ShowMore
            amenityIcon0={this.props.amenityIcon0}
            amenityCopy0={this.props.amenityCopy0}
            amenityIcon1={this.props.amenityIcon1}
            amenityCopy1={this.props.amenityCopy1}
            amenityIcon2={this.props.amenityIcon2}
            amenityCopy2={this.props.amenityCopy2}
            amenityIcon3={this.props.amenityIcon3}
            amenityCopy3={this.props.amenityCopy3}
            amenityIcon4={this.props.amenityIcon4}
            amenityCopy4={this.props.amenityCopy4}
            amenityIcon5={this.props.amenityIcon5}
            amenityCopy5={this.props.amenityCopy5}
            amenityIcon6={this.props.amenityIcon6}
            amenityCopy6={this.props.amenityCopy6}
            amenityIcon7={this.props.amenityIcon7}
            amenityCopy7={this.props.amenityCopy7}

            amenityIcon8={this.props.amenityIcon8}
            amenityCopy8={this.props.amenityCopy8}
            amenityIcon9={this.props.amenityIcon9}
            amenityCopy9={this.props.amenityCopy9}
            amenityIcon10={this.props.amenityIcon10}
            amenityCopy10={this.props.amenityCopy10}
            amenityIcon11={this.props.amenityIcon11}
            amenityCopy11={this.props.amenityCopy11}
            amenityIcon12={this.props.amenityIcon12}
            amenityCopy12={this.props.amenityCopy12}
            amenityIcon13={this.props.amenityIcon13}
            amenityCopy13={this.props.amenityCopy13}
            amenityIcon14={this.props.amenityIcon14}
            amenityCopy14={this.props.amenityCopy14}
            amenityIcon15={this.props.amenityIcon15}
            amenityCopy15={this.props.amenityCopy15}

            roomFeatureIcon0={this.props.roomFeatureIcon0}
            roomFeatureCopy0={this.props.roomFeatureCopy0}
            roomFeatureIcon1={this.props.roomFeatureIcon1}
            roomFeatureCopy1={this.props.roomFeatureCopy1}
            roomFeatureIcon2={this.props.roomFeatureIcon2}
            roomFeatureCopy2={this.props.roomFeatureCopy2}
            roomFeatureIcon3={this.props.roomFeatureIcon3}
            roomFeatureCopy3={this.props.roomFeatureCopy3}
            roomFeatureIcon4={this.props.roomFeatureIcon4}
            roomFeatureCopy4={this.props.roomFeatureCopy4}
            roomFeatureIcon5={this.props.roomFeatureIcon5}
            roomFeatureCopy5={this.props.roomFeatureCopy5}
            roomFeatureIcon6={this.props.roomFeatureIcon6}
            roomFeatureCopy6={this.props.roomFeatureCopy6}
            roomFeatureIcon7={this.props.roomFeatureIcon7}
            roomFeatureCopy7={this.props.roomFeatureCopy7}

            roomTypeIcon0={this.props.roomTypeIcon0}
            roomTypeCopy0={this.props.roomTypeCopy0}
            roomTypeIcon1={this.props.roomTypeIcon1}
            roomTypeCopy1={this.props.roomTypeCopy1}
            roomTypeIcon2={this.props.roomTypeIcon2}
            roomTypeCopy2={this.props.roomTypeCopy2}
            roomTypeIcon3={this.props.roomTypeIcon3}
            roomTypeCopy3={this.props.roomTypeCopy3}
          /> :
          null
        }

      </styles.propertyAmenitiesContainer>
    );
  }
}

export default PropertyAmenities;

// this.props.amenityCopy0.split('.')[0].length > 20 ? this.props.amenityCopy0.split('.')[0].slice(0, 21) : this.props.amenityCopy0.split('.')[0]