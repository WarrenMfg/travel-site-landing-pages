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
        'fas fa-music'
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
          <styles.tabContainer onClick={this.handleSwitchTab}>
            <styles.tab css={this.state.activeTab === 'Property amenities' ? styles.activeTab : {}}>Property amenities</styles.tab>
            <styles.tab css={this.state.activeTab === 'Room features' ? styles.activeTab : {}}>Room features</styles.tab>
            <styles.tab css={this.state.activeTab === 'Room types' ? styles.activeTab : {}}>Room types</styles.tab>
          </styles.tabContainer>
        </styles.modalContainer>
      </styles.background>
    );
  }
}

export default ShowMore;
