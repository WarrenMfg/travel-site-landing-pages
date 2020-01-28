import PropertyAmenities from '../src/components/PropertyAmenities.jsx';

describe('PropertyAmenities.jsx', () => {
  test('it should exist', () => {
    expect(new PropertyAmenities()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new PropertyAmenities()).toBeInstanceOf(PropertyAmenities);
  });

  test('it should have state', () => {
    const newPropertyAmenitiesState = new PropertyAmenities();
    const currentPropertyAmenitiesState = {amenityIcons: ['fas fa-biking', 'fas fa-fish', 'fas fa-ice-cream', 'fas fa-swimmer', 'fas fa-volleyball-ball', 'fas fa-caravan', 'fas fa-glass-martini-alt', 'fas fa-plane']};
    expect(newPropertyAmenitiesState.state).toEqual(currentPropertyAmenitiesState);
  });
});