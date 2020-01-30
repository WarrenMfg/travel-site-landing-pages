import React from 'react';
import styles from '../css/CarouselCSS.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      mainImage: '',
      mainImageIndex: 0,
      mainImageHover: false
    };
    this.handleBottomImageClick = this.handleBottomImageClick.bind(this);
    this.handleMainImageMouseOver = this.handleMainImageMouseOver.bind(this);
    this.handleMainImageMouseLeave = this.handleMainImageMouseLeave.bind(this);
    this.handleLeftChevron = this.handleLeftChevron.bind(this);
    this.handleRightChevron = this.handleRightChevron.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // images are initially 'null' from App.state
    if (prevProps.image0 !== this.props.image0) {
      this.setState({
        images: [this.props.image0, this.props.image1, this.props.image2, this.props.image3, this.props.image4, this.props.image5, this.props.image6],
        mainImage: this.props.image0
      });
    }
  }

  handleMainImageMouseOver() {
    this.setState({mainImageHover: true});
  }

  handleMainImageMouseLeave() {
    this.setState({mainImageHover: false});
  }

  handleLeftChevron() {
    let i;
    if (this.state.mainImageIndex === 0) {
      i = 6;
    } else {
      i = this.state.mainImageIndex - 1;
    }
    this.setState({mainImage: this.state.images[i], mainImageIndex: i});
  }

  handleRightChevron() {
    let i;
    if (this.state.mainImageIndex === 6) {
      i = 0;
    } else {
      i = this.state.mainImageIndex + 1;
    }
    this.setState({mainImage: this.state.images[i], mainImageIndex: i});
  }

  handleBottomImageClick(e) {
    let i = parseInt(e.target.dataset.index, 10);
    this.setState({mainImage: this.state.images[i], mainImageIndex: i});
  }

  render() {
    return (
      <styles.carouselContainer>

        <styles.mainImageContainer onMouseOver={this.handleMainImageMouseOver} onMouseLeave={this.handleMainImageMouseLeave}>
          <div css={{
            backgroundImage: `url("${this.state.mainImage || ''}")`,
            height: '275px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
          }}>
            {this.state.mainImageHover && this.state.mainImageIndex !== 0 &&
              <styles.leftChevron onClick={this.handleLeftChevron}><i className="fas fa-chevron-left"></i></styles.leftChevron>
            }
            {this.state.mainImageHover && this.state.mainImageIndex !== 6 &&
              <styles.rightChevron onClick={this.handleRightChevron}><i className="fas fa-chevron-right"></i></styles.rightChevron>
            }
          </div>
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
                filter: `${this.state.mainImageIndex === i ? 'brightness(100%)' : 'brightness(50%)'}`,
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