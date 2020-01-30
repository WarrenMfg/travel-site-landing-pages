import React from 'react';
import styles from '../css/CarouselCSS.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [this.props.image0, this.props.image1, this.props.image2, this.props.image3, this.props.image4, this.props.image5, this.props.image6],
      mainImage: this.props.image0
    };
    this.handleBottomImageClick = this.handleBottomImageClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        images: [this.props.image0, this.props.image1, this.props.image2, this.props.image3, this.props.image4, this.props.image5, this.props.image6],
        mainImage: this.props.image0
      });
    }
  }

  handleBottomImageClick(e) {
    this.setState({mainImage: this.state.images[e.target.dataset.index]});
  }

  render() {
    return (
      <styles.carouselContainer>

        <styles.mainImageContainer>
          <div css={{
            backgroundImage: `url("${this.state.mainImage || ''}")`,
            height: '275px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          ></div>
        </styles.mainImageContainer>

        <styles.bottomImagesContainer onClick={this.handleBottomImageClick}>
          {this.state.images.map((image, i) =>
            <div
              key={i}
              data-index={i}
              css={{
                backgroundImage: `url("${this.state.images[i] || ''}")`,
                width: '13.75%',
                height: '50px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                cursor: 'pointer'
              }}
            />

          )}
        </styles.bottomImagesContainer>

      </styles.carouselContainer>
    );
  }
}

export default Carousel;