import React from 'react';
import styles from '../css/RoomTypesCSS.js';

class RoomTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomTypesIcons: ['fas fa-bed', 'fas fa-campground', 'fas fa-building', 'fas fa-couch']
    };
  }

  render() {
    return (
      <styles.roomTypesContainer>
        <h4>Room types</h4>

        <styles.columns>
          {this.props.roomTypeIcon0 ?
            <div>
              <i className={this.state.roomTypesIcons[0]}></i><p>{this.props.roomTypeCopy0.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomTypeIcon1 ?
            <div>
              <i className={this.state.roomTypesIcons[1]}></i><p>{this.props.roomTypeCopy1.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomTypeIcon2 ?
            <div>
              <i className={this.state.roomTypesIcons[2]}></i><p>{this.props.roomTypeCopy2.split('.')[0]}</p>
            </div> :
            null
          }
          {this.props.roomTypeIcon3 ?
            <div>
              <i className={this.state.roomTypesIcons[3]}></i><p>{this.props.roomTypeCopy3.split('.')[0]}</p>
            </div> :
            null
          }
        </styles.columns>

        <styles.seeMore>See more room details</styles.seeMore>
      </styles.roomTypesContainer>
    );
  }
}

export default RoomTypes;