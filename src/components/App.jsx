import React from 'react';
import {Global, css, jsx} from '@emotion/core';
import styles from '../css/AppCSS.js';
import Ratings from './Ratings.jsx';
import Superlatives from './Superlatives.jsx';
import AboutCopy from './AboutCopy.jsx';

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
      greenLeadersPopup: false,
      aboutCopy: null
    };
    this.handleSuperlativeMouseOver = this.handleSuperlativeMouseOver.bind(this);
    this.handleSuperlativeMouseOut = this.handleSuperlativeMouseOut.bind(this);
  }

  componentDidMount() {
    let url = window.location.pathname.split('/');
    let id = url[1];

    fetch(`http://127.0.0.1:313/api/about/${id}`)
      .then(data => data.json())
      .then(data => {
        data = data.data[0];
        let {average, location, cleanliness, service, value, certOfExcellence, greenLeaders, aboutCopy} = data;
        this.setState({id: data.id, average, location, cleanliness, service, value, certOfExcellence, greenLeaders, aboutCopy});
      })
      .catch(err => console.log('error at App.jsx componentDidMount', err));
  }

  handleSuperlativeMouseOver(e) {
    if (e.target.innerText === 'Certificate of Excellence') {
      this.setState({coePopup: true});
    } else if (e.target.innerText === 'GreenLeaders GreenPartner') {
      this.setState({greenLeadersPopup: true});
    }
  }

  handleSuperlativeMouseOut(e) {
    if (e.target.innerText === 'Certificate of Excellence') {
      this.setState({coePopup: false});
    } else if (e.target.innerText === 'GreenLeaders GreenPartner') {
      this.setState({greenLeadersPopup: false});
    }
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
                certOfExcellence={this.state.certOfExcellence}
                coePopup={this.state.coePopup}
                greenLeaders={this.state.greenLeaders}
                greenLeadersPopup={this.state.greenLeadersPopup}
              />

              <AboutCopy
                copy={this.state.aboutCopy}
              />

              {/* IMAGE CAROUSEL IF TIME PERMITS */}
              <styles.imagePlaceholder></styles.imagePlaceholder>
            </styles.left>


            <styles.right>
            </styles.right>

          </styles.grid>

        </styles.aboutContainer>
      </div>

    );
  }
}

export default App;