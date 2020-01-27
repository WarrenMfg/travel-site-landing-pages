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
            <p><i className={this.state.roomTypesIcons[0]}></i>{this.props.roomTypeCopy0.split('.')[0]}</p> :
            null
          }
          {this.props.roomTypeIcon1 ?
            <p><i className={this.state.roomTypesIcons[1]}></i>{this.props.roomTypeCopy1.split('.')[0]}</p> :
            null
          }
          {this.props.roomTypeIcon2 ?
            <p><i className={this.state.roomTypesIcons[2]}></i>{this.props.roomTypeCopy2.split('.')[0]}</p> :
            null
          }
          {this.props.roomTypeIcon3 ?
            <p><i className={this.state.roomTypesIcons[3]}></i>{this.props.roomTypeCopy3.split('.')[0]}</p> :
            null
          }
        </styles.columns>

        <styles.seeMore>See more room details</styles.seeMore>
      </styles.roomTypesContainer>
    );
  }
}

export default RoomTypes;