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
            <div>
              <i className={this.state.roomFeatureIcons[0]}></i><p>{this.props.roomFeatureCopy0.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomFeatureIcon1 ?
            <div>
              <i className={this.state.roomFeatureIcons[1]}></i><p>{this.props.roomFeatureCopy1.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomFeatureIcon2 ?
            <div>
              <i className={this.state.roomFeatureIcons[2]}></i><p>{this.props.roomFeatureCopy2.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomFeatureIcon3 ?
            <div>
              <i className={this.state.roomFeatureIcons[3]}></i><p>{this.props.roomFeatureCopy3.split('.')[0]}</p>
            </div> :
            null
          }

          {this.props.roomFeatureIcon4 ?
            <div>
              <i className={this.state.roomFeatureIcons[4]}></i><p>{this.props.roomFeatureCopy4.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomFeatureIcon5 ?
            <div>
              <i className={this.state.roomFeatureIcons[5]}></i><p>{this.props.roomFeatureCopy5.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomFeatureIcon6 ?
            <div>
              <i className={this.state.roomFeatureIcons[6]}></i><p>{this.props.roomFeatureCopy6.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomFeatureIcon7 ?
            <div>
              <i className={this.state.roomFeatureIcons[7]}></i><p>{this.props.roomFeatureCopy7.split('.')[0]}</p>
            </div> :
            null
          }
        </styles.columns>

      </styles.roomFeaturesContainer>
    );
  }
}

export default RoomFeatures;