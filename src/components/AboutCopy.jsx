import React from 'react';
import styles from '../css/AboutCopyCSS.js';
import {jsx} from '@emotion/core';


class AboutCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: 1,
      expandCSS: {}
    };
    this.handleReadMore = this.handleReadMore.bind(this);
    this.handleExpandCopyContainer = this.handleExpandCopyContainer.bind(this);
  }

  handleReadMore() {
    let expandCSS;
    if (this.state.expand % 2 === 0) {
      expandCSS = {};
    } else {
      expandCSS = {
        height: '100%',
        boxShadow: 'none'
      };
    }
    this.setState(prevState => ({expand: prevState.expand + 1, expandCSS}));
  }

  handleExpandCopyContainer() {
    // if it's an empty object
    if (Object.keys(this.state.expandCSS).length === 0) {
      // add CSS
      this.setState(prevState => ({
        expand: prevState.expand + 1,
        expandCSS: {
          height: '100%',
          boxShadow: 'none'
        }
      }));
    }
  }

  render() {
    return (
      <div>
        <styles.copyContainer css={this.state.expandCSS} onClick={this.handleExpandCopyContainer}>
          <p>{this.props.copy}</p>
        </styles.copyContainer>

        {this.state.expand % 2 === 0 ?

          <styles.readMore onClick={this.handleReadMore}>
            Read less&nbsp;<i className="fas fa-caret-up"></i>
          </styles.readMore> :

          <styles.readMore onClick={this.handleReadMore}>
            Read more&nbsp;<i className="fas fa-caret-down"></i>
          </styles.readMore>

        }
      </div>
    );
  }
}

export default AboutCopy;