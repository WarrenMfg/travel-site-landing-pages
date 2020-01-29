import HotelLinks from '../src/components/HotelLinks.jsx';
import {render} from 'enzyme';


describe('HotelLinks.jsx', () => {
  test('it should exist', () => {
    expect(new HotelLinks()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new HotelLinks()).toBeInstanceOf(HotelLinks);
  });

  test('it should not have state', () => {
    const newHotelLinksState = new HotelLinks();
    expect(newHotelLinksState.state).toBeUndefined();
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<HotelLinks />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have one child', () => {
    const wrapper = render(<HotelLinks />);
    expect(wrapper['0'].children).toHaveLength(1);
  });
});