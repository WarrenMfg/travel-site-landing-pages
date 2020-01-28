import React from 'react';
import styles from '../css/SuperlativesCSS.js';

class Superlatives extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <styles.superlativeContainer>
        {this.props.certOfExcellence ?
          <styles.superlative onMouseOver={this.props.mouseOver} onMouseOut={this.props.mouseOut}><i className="fas fa-award" css={styles.faSuperlative}></i>Certificate of Excellence</styles.superlative> :
          null
        }
        {this.props.coePopup ?
          <styles.coePopup>
            <div>
              <h3>What is Certificate of Excellence?</h3>
              <p>TripAdvisor gives a Certificate of Excellence to accommodations, attractions and restaurants that consistently earn great reviews from travelers.</p>
            </div>
          </styles.coePopup> :
          null
        }

        {this.props.greenLeaders ?
          <styles.superlative onMouseOver={this.props.mouseOver} onMouseOut={this.props.mouseOut}><i className="fab fa-envira" css={styles.faSuperlative}></i>GreenLeaders GreenPartner</styles.superlative> :
          null
        }
        {this.props.greenLeadersHover || this.props.greenLeadersPopupHover ?
          <styles.greenLeadersPopup onMouseOver={this.props.handleGreenLeadersPopupMouseOver} onMouseLeave={this.props.handleGreenLeadersPopupMouseOut}>
            <div>
              <h4>GreenLeaders GreenPartner</h4>
              <ul>
                <li>Staff training on green practices</li>
                <li>Towel reuse program</li>
                <li>Linen reuse program</li>
                <li>Energy-efficient lightbulbs</li>
                <li>Tracks energy use</li>
              </ul>
              <a href="https://www.tripadvisor.com/GreenLeaders" target="_blank" title="Your eco-friendly stay starts here.">See all green practices</a>
            </div>
          </styles.greenLeadersPopup> :
          null
        }
      </styles.superlativeContainer>
    );
  }
}

export default Superlatives;