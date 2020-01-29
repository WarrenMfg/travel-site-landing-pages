import GoodToKnow from '../src/components/GoodToKnow.jsx';
import {render} from 'enzyme';

describe('GoodToKnow.jsx', () => {
  test('it should exist', () => {
    expect(new GoodToKnow()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new GoodToKnow()).toBeInstanceOf(GoodToKnow);
  });

  test('it should have state', () => {
    const newGoodToKnowState = new GoodToKnow();
    const currentGoodToKnowState = {infoPopup: false};
    expect(newGoodToKnowState.state).toEqual(currentGoodToKnowState);
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<GoodToKnow />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have four children', () => {
    const wrapper = render(<GoodToKnow />);
    expect(wrapper['0'].children).toHaveLength(4); // because ternaries and HotelClass return null
  });
});