import HotelClass from '../src/components/HotelClass.jsx';

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
});