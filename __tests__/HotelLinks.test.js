import HotelLinks from '../src/components/HotelLinks.jsx';

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
});