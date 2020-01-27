import React from 'react';
import styles from '../css/RoomFeaturesCSS.js';

class RoomFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomFeatureIcons: ['fas fa-bed', 'fas fa-coffee', 'fas fa-concierge-bell', 'fas fa-dumbbell', 'fas fa-shower', 'fas fa-smoking-ban', 'fas fa-wheelchair', 'fas fa-wifi']
    };
  }

  render() {
    return (
      <styles.roomFeaturesContainer>
        <h4>Room features</h4>

        <styles.columns>
          {this.props.roomFeatureIcon0 ?
            <p><i className={this.state.roomFeatureIcons[0]}></i>{this.props.roomFeatureCopy0.split('.')[0]}</p> :
            null
          }
          {this.props.roomFeatureIcon1 ?
            <p><i className={this.state.roomFeatureIcons[1]}></i>{this.props.roomFeatureCopy1.split('.')[0]}</p> :
            null
          }
          {this.props.roomFeatureIcon2 ?
            <p><i className={this.state.roomFeatureIcons[2]}></i>{this.props.roomFeatureCopy2.split('.')[0]}</p> :
            null
          }
          {this.props.roomFeatureIcon3 ?
            <p><i className={this.state.roomFeatureIcons[3]}></i>{this.props.roomFeatureCopy3.split('.')[0]}</p> :
            null
          }

          {this.props.roomFeatureIcon4 ?
            <p><i className={this.state.roomFeatureIcons[4]}></i>{this.props.roomFeatureCopy4.split('.')[0]}</p> :
            null
          }
          {this.props.roomFeatureIcon5 ?
            <p><i className={this.state.roomFeatureIcons[5]}></i>{this.props.roomFeatureCopy5.split('.')[0]}</p> :
            null
          }
          {this.props.roomFeatureIcon6 ?
            <p><i className={this.state.roomFeatureIcons[6]}></i>{this.props.roomFeatureCopy6.split('.')[0]}</p> :
            null
          }
          {this.props.roomFeatureIcon7 ?
            <p><i className={this.state.roomFeatureIcons[7]}></i>{this.props.roomFeatureCopy7.split('.')[0]}</p> :
            null
          }
        </styles.columns>

      </styles.roomFeaturesContainer>
    );
  }
}

export default RoomFeatures;