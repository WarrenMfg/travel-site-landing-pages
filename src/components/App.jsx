import React from 'react';
import {Global, css, jsx} from '@emotion/core';
import styles from '../css/AppCSS.js';
import Ratings from './Ratings.jsx';
import Superlatives from './Superlatives.jsx';
import AboutCopy from './AboutCopy.jsx';
import PropertyAmenities from './PropertyAmenities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      average: null,
      location: null,
      cleanliness: null,
      service: null,
      value: null,
      certOfExcellence: null,
      coePopup: false,
      greenLeaders: null,
      greenLeadersHover: false,
      greenLeadersPopupHover: false,
      aboutCopy: null,
      amenityIcon0: null,
      amenityCopy0: null,
      amenityIcon1: null,
      amenityCopy1: null,
      amenityIcon2: null,
      amenityCopy2: null,
      amenityIcon3: null,
      amenityCopy3: null,
      amenityIcon4: null,
      amenityCopy4: null,
      amenityIcon5: null,
      amenityCopy5: null,
      amenityIcon6: null,
      amenityCopy6: null,
      amenityIcon7: null,
      amenityCopy7: null
    };
    this.handleSuperlativeMouseOver = this.handleSuperlativeMouseOver.bind(this);
    this.handleSuperlativeMouseOut = this.handleSuperlativeMouseOut.bind(this);
    this.handleGreenLeadersPopupMouseOver = this.handleGreenLeadersPopupMouseOver.bind(this);
    this.handleGreenLeadersPopupMouseOut = this.handleGreenLeadersPopupMouseOut.bind(this);
  }

  componentDidMount() {
    let url = window.location.pathname.split('/');
    let id = url[1];

    fetch(`http://127.0.0.1:313/api/about/${id}`)
      .then(data => data.json())
      .then(data => {
        data = data.data[0];
        let {
          average,
          location,
          cleanliness,
          service,
          value,
          certOfExcellence,
          greenLeaders,
          aboutCopy,
          amenityIcon0,
          amenityCopy0,
          amenityIcon1,
          amenityCopy1,
          amenityIcon2,
          amenityCopy2,
          amenityIcon3,
          amenityCopy3,
          amenityIcon4,
          amenityCopy4,
          amenityIcon5,
          amenityCopy5,
          amenityIcon6,
          amenityCopy6,
          amenityIcon7,
          amenityCopy7
        } = data;

        this.setState({
          id: data.id,
          average,
          location,
          cleanliness,
          service,
          value,
          certOfExcellence,
          greenLeaders,
          aboutCopy,
          amenityIcon0,
          amenityCopy0,
          amenityIcon1,
          amenityCopy1,
          amenityIcon2,
          amenityCopy2,
          amenityIcon3,
          amenityCopy3,
          amenityIcon4,
          amenityCopy4,
          amenityIcon5,
          amenityCopy5,
          amenityIcon6,
          amenityCopy6,
          amenityIcon7,
          amenityCopy7
        });
      })
      .catch(err => console.log('error at App.jsx componentDidMount', err));
  }

  handleSuperlativeMouseOver(e) {
    if (e.target.innerText === 'Certificate of Excellence') {
      this.setState({coePopup: true});
    } else if (e.target.innerText === 'GreenLeaders GreenPartner') {
      this.setState({greenLeadersHover: true});
    }
  }

  handleSuperlativeMouseOut(e) {
    if (e.target.innerText === 'Certificate of Excellence') {
      this.setState({coePopup: false});
    } else if (e.target.innerText === 'GreenLeaders GreenPartner') {
      setTimeout(() => this.setState({greenLeadersHover: false}), 0);
    }
  }

  handleGreenLeadersPopupMouseOver(e) {
    this.setState({greenLeadersPopupHover: true});
  }

  handleGreenLeadersPopupMouseOut(e) {
    this.setState({greenLeadersPopupHover: false});
  }

  render() {

    return (
      <div>
        <Global styles={styles.global} />
        <styles.aboutContainer>

          <styles.h2>About</styles.h2>


          <styles.grid>
            <styles.left>
              <Ratings
                average={this.state.average}
                location={this.state.location}
                cleanliness={this.state.cleanliness}
                service={this.state.service}
                value={this.state.value}
                certOfExcellence={this.state.certOfExcellence}
                greenLeaders={this.state.greenLeaders}
              />

              <Superlatives
                mouseOver={this.handleSuperlativeMouseOver}
                mouseOut={this.handleSuperlativeMouseOut}
                handleGreenLeadersPopupMouseOver={this.handleGreenLeadersPopupMouseOver}
                handleGreenLeadersPopupMouseOut={this.handleGreenLeadersPopupMouseOut}
                certOfExcellence={this.state.certOfExcellence}
                coePopup={this.state.coePopup}
                greenLeaders={this.state.greenLeaders}
                greenLeadersHover={this.state.greenLeadersHover}
                greenLeadersPopupHover={this.state.greenLeadersPopupHover}
              />

              <AboutCopy
                copy={this.state.aboutCopy}
              />

              {/* IMAGE CAROUSEL IF TIME PERMITS */}
              <styles.imagePlaceholder></styles.imagePlaceholder>
            </styles.left>


            <styles.right>
              <PropertyAmenities
                amenityIcon0={this.state.amenityIcon0}
                amenityCopy0={this.state.amenityCopy0}
                amenityIcon1={this.state.amenityIcon1}
                amenityCopy1={this.state.amenityCopy1}
                amenityIcon2={this.state.amenityIcon2}
                amenityCopy2={this.state.amenityCopy2}
                amenityIcon3={this.state.amenityIcon3}
                amenityCopy3={this.state.amenityCopy3}
                amenityIcon4={this.state.amenityIcon4}
                amenityCopy4={this.state.amenityCopy4}
                amenityIcon5={this.state.amenityIcon5}
                amenityCopy5={this.state.amenityCopy5}
                amenityIcon6={this.state.amenityIcon6}
                amenityCopy6={this.state.amenityCopy6}
                amenityIcon7={this.state.amenityIcon7}
                amenityCopy7={this.state.amenityCopy7}
              />
            </styles.right>

          </styles.grid>

        </styles.aboutContainer>
      </div>

    );
  }
}

export default App;