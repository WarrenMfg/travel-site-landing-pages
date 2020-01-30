import Carousel from '../src/components/Carousel.jsx';
import {render} from 'enzyme';

describe('Carousel.jsx', () => {
  test('it should exist', () => {
    expect(new Carousel()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new Carousel()).toBeInstanceOf(Carousel);
  });

  test('it should have state', () => {
    const newCarouselState = new Carousel();
    const currentCarouselState = {
      images: [],
      mainImage: '',
      mainImageIndex: 0,
      mainImageHover: false
    };
    expect(newCarouselState.state).toEqual(currentCarouselState);
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<Carousel />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have four children', () => {
    const wrapper = render(<Carousel />);
    expect(wrapper['0'].children).toHaveLength(2);
  });
});