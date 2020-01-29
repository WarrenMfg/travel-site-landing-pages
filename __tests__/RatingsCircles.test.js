import RatingsCircles from '../src/components/RatingsCircles.jsx';
import {render} from 'enzyme';


describe('RatingsCircles.jsx', () => {
  test('it should exist', () => {
    expect(new RatingsCircles()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new RatingsCircles()).toBeInstanceOf(RatingsCircles);
  });

  test('it should not have state', () => {
    const newRatingsCirclesState = new RatingsCircles();
    expect(newRatingsCirclesState.state).toBeUndefined();
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<RatingsCircles rating={5} category={'Value'} />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have six children', () => {
    const wrapper = render(<RatingsCircles rating={5} category={'Value'} />);
    expect(wrapper['0'].children).toHaveLength(6);
  });
});