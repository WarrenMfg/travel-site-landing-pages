import HotelClass from '../src/components/HotelClass.jsx';
import {render} from 'enzyme';


describe('HotelClass.jsx', () => {
  test('it should exist', () => {
    expect(new HotelClass()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new HotelClass()).toBeInstanceOf(HotelClass);
  });

  test('it should not have state', () => {
    const newHotelClassState = new HotelClass();
    expect(newHotelClassState.state).toBeUndefined();
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<HotelClass hotelClass={5} />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have five children', () => {
    const wrapper = render(<HotelClass hotelClass={5} />);
    expect(wrapper['0'].children).toHaveLength(5);
  });
});