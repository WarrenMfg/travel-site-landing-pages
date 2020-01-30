import React from 'react';
import styles from '../css/CarouselCSS.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <styles.carouselContainer>

        <styles.mainImageContainer>
          <styles.mainImage src="https://about-widget.s3.us-east-2.amazonaws.com/1/0.jpeg" alt="You'll definitely want to stay here!"/>
        </styles.mainImageContainer>

        <styles.bottomImagesContainer>
          <styles.bottomImage src="https://about-widget.s3.us-east-2.amazonaws.com/1/0.jpeg" alt="You'll definitely want to stay here!" />
          <styles.bottomImage src="https://about-widget.s3.us-east-2.amazonaws.com/1/1.jpeg" alt="You'll definitely want to stay here!" />
          <styles.bottomImage src="https://about-widget.s3.us-east-2.amazonaws.com/1/2.jpeg" alt="You'll definitely want to stay here!" />
          <styles.bottomImage src="https://about-widget.s3.us-east-2.amazonaws.com/1/3.jpeg" alt="You'll definitely want to stay here!" />
          <styles.bottomImage src="https://about-widget.s3.us-east-2.amazonaws.com/1/4.jpeg" alt="You'll definitely want to stay here!" />
          <styles.bottomImage src="https://about-widget.s3.us-east-2.amazonaws.com/1/5.jpeg" alt="You'll definitely want to stay here!" />
          <styles.bottomImage src="https://about-widget.s3.us-east-2.amazonaws.com/1/6.jpeg" alt="You'll definitely want to stay here!" />
        </styles.bottomImagesContainer>

      </styles.carouselContainer>
    );
  }
}

export default Carousel;