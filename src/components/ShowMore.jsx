import React from 'react';
import styles from '../css/ShowMoreCSS.js';


class ShowMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Property amenities',
      amenityIcons: [
        'fas fa-biking',
        'fas fa-fish',
        'fas fa-ice-cream',
        'fas fa-swimmer',
        'fas fa-volleyball-ball',
        'fas fa-caravan',
        'fas fa-glass-martini-alt',
        'fas fa-plane',
        'fas fa-snowboarding',
        'fas fa-hiking',
        'fas fa-bus',
        'fas fa-charging-station',
        'fas fa-desktop',
        'fas fa-mortar-pestle',
        'fas fa-theater-masks',
        'fas fa-music',
        'fab fa-playstation',
        'fas fa-dice',
        'fas fa-baby-carriage',
        'fas fa-horse',
        'fas fa-paw',
        'fas fa-cloud-moon',
        'fas fa-palette',
        'fas fa-camera',
        'fas fa-heart',
        'fas fa-crown',
        'fas fa-map-marker-alt',
        'fas fa-mountain',
        'fas fa-store',
        'fas fa-dog',
        'fas fa-anchor',
        'fas fa-umbrella-beach'
      ],
      roomFeatureIcons: [
        'fas fa-bed',
        'fas fa-coffee',
        'fas fa-concierge-bell',
        'fas fa-dumbbell',
        'fas fa-shower',
        'fas fa-smoking-ban',
        'fas fa-wheelchair',
        'fas fa-wifi'
      ],
      roomTypesIcons: [
        'fas fa-bed',
        'fas fa-campground',
        'fas fa-building',
        'fas fa-couch'
      ]
    };
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  handleSwitchTab(e) {
    if (e.target.innerText === 'Property amenities') {
      this.setState({activeTab: 'Property amenities'});
    } else if (e.target.innerText === 'Room features') {
      this.setState({activeTab: 'Room features'});
    } else if (e.target.innerText === 'Room types') {
      this.setState({activeTab: 'Room types'});
    }
  }

  render() {
    return (
      <styles.background>
        <styles.modalContainer>

          <h2>Details</h2>
          <styles.close onClick={this.props.handleCloseModal}><i className="fas fa-times"></i></styles.close>

          <styles.tabContainer onClick={this.handleSwitchTab}>
            <styles.tab css={this.state.activeTab === 'Property amenities' ? styles.activeTab : {}}>Property amenities</styles.tab>
            <styles.tab css={this.state.activeTab === 'Room features' ? styles.activeTab : {}}>Room features</styles.tab>
            <styles.tab css={this.state.activeTab === 'Room types' ? styles.activeTab : {}}>Room types</styles.tab>
          </styles.tabContainer>

          {this.state.activeTab === 'Property amenities' &&
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

              {this.props.amenityIcon8 ?
                <div>
                  <i className={this.state.amenityIcons[8]}></i><p>{this.props.amenityCopy8.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon9 ?
                <div>
                  <i className={this.state.amenityIcons[9]}></i><p>{this.props.amenityCopy9.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon10 ?
                <div>
                  <i className={this.state.amenityIcons[10]}></i><p>{this.props.amenityCopy10.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon11 ?
                <div>
                  <i className={this.state.amenityIcons[11]}></i><p>{this.props.amenityCopy11.split('.')[0]}</p>
                </div> :
                null
              }

              {this.props.amenityIcon12 ?
                <div>
                  <i className={this.state.amenityIcons[12]}></i><p>{this.props.amenityCopy12.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon13 ?
                <div>
                  <i className={this.state.amenityIcons[13]}></i><p>{this.props.amenityCopy13.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon14 ?
                <div>
                  <i className={this.state.amenityIcons[14]}></i><p>{this.props.amenityCopy14.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon15 ?
                <div>
                  <i className={this.state.amenityIcons[15]}></i><p>{this.props.amenityCopy15.split('.')[0]}</p>
                </div> :
                null
              }

              {this.props.amenityIcon16 ?
                <div>
                  <i className={this.state.amenityIcons[16]}></i><p>{this.props.amenityCopy16.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon17 ?
                <div>
                  <i className={this.state.amenityIcons[17]}></i><p>{this.props.amenityCopy17.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon18 ?
                <div>
                  <i className={this.state.amenityIcons[18]}></i><p>{this.props.amenityCopy18.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon19 ?
                <div>
                  <i className={this.state.amenityIcons[19]}></i><p>{this.props.amenityCopy19.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon20 ?
                <div>
                  <i className={this.state.amenityIcons[20]}></i><p>{this.props.amenityCopy20.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon21 ?
                <div>
                  <i className={this.state.amenityIcons[21]}></i><p>{this.props.amenityCopy21.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon22 ?
                <div>
                  <i className={this.state.amenityIcons[22]}></i><p>{this.props.amenityCopy22.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon23 ?
                <div>
                  <i className={this.state.amenityIcons[23]}></i><p>{this.props.amenityCopy23.split('.')[0]}</p>
                </div> :
                null
              }

              {this.props.amenityIcon24 ?
                <div>
                  <i className={this.state.amenityIcons[24]}></i><p>{this.props.amenityCopy24.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon25 ?
                <div>
                  <i className={this.state.amenityIcons[25]}></i><p>{this.props.amenityCopy25.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon26 ?
                <div>
                  <i className={this.state.amenityIcons[26]}></i><p>{this.props.amenityCopy26.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon27 ?
                <div>
                  <i className={this.state.amenityIcons[27]}></i><p>{this.props.amenityCopy27.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon28 ?
                <div>
                  <i className={this.state.amenityIcons[28]}></i><p>{this.props.amenityCopy28.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon29 ?
                <div>
                  <i className={this.state.amenityIcons[29]}></i><p>{this.props.amenityCopy29.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon30 ?
                <div>
                  <i className={this.state.amenityIcons[30]}></i><p>{this.props.amenityCopy30.split('.')[0]}</p>
                </div> :
                null
              }
              {this.props.amenityIcon31 ?
                <div>
                  <i className={this.state.amenityIcons[31]}></i><p>{this.props.amenityCopy31.split('.')[0]}</p>
                </div> :
                null
              }
            </styles.columns>
          }

          {this.state.activeTab === 'Room features' &&
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
          }

          {this.state.activeTab === 'Room types' &&
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
          }

        </styles.modalContainer>
      </styles.background>
    );
  }
}

export default ShowMore;
