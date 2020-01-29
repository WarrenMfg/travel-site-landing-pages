import Ratings from '../src/components/Ratings.jsx';
import {render} from 'enzyme';


describe('Ratings.jsx', () => {
  test('it should exist', () => {
    expect(new Ratings()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new Ratings()).toBeInstanceOf(Ratings);
  });

  test('it should not have state', () => {
    const newRatingsState = new Ratings();
    expect(newRatingsState.state).toBeUndefined();
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<Ratings />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have two children', () => {
    const wrapper = render(<Ratings />);
    expect(wrapper['0'].children).toHaveLength(2); // because RatingsCircles returns null
  });
});