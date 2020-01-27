import React from 'react';
import styles from '../css/AboutCopyCSS.js';
import {jsx} from '@emotion/core';

let expand = {};

class AboutCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: 1
    };
    this.handleReadMore = this.handleReadMore.bind(this);
  }

  handleReadMore() {
    if (this.state.expand % 2 === 0) {
      expand = {};
    } else {
      expand = {
        height: '100%',
        boxShadow: 'none'
      };
    }
    this.setState(prevState => ({expand: prevState.expand + 1}));
  }

  render() {
    return (
      <div>
        <styles.copyContainer css={expand}>
          <p>{this.props.copy}</p>
        </styles.copyContainer>
        <styles.readMore onClick={this.handleReadMore}>
          Read more&nbsp;
          {this.state.expand % 2 === 0 ?
            <i className="fas fa-caret-up"></i> :
            <i className="fas fa-caret-down"></i>
          }
        </styles.readMore>
      </div>
    );
  }
}

export default AboutCopy;