import PropertyAmenities from '../src/components/PropertyAmenities.jsx';
import {render} from 'enzyme';


describe('PropertyAmenities.jsx', () => {
  test('it should exist', () => {
    expect(new PropertyAmenities()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new PropertyAmenities()).toBeInstanceOf(PropertyAmenities);
  });

  test('it should have state', () => {
    const newPropertyAmenitiesState = new PropertyAmenities();
    const currentPropertyAmenitiesState = {
      amenityIcons: ['fas fa-biking', 'fas fa-fish', 'fas fa-ice-cream', 'fas fa-swimmer', 'fas fa-volleyball-ball', 'fas fa-caravan', 'fas fa-glass-martini-alt', 'fas fa-plane'],
      modal: false
    };
    expect(newPropertyAmenitiesState.state).toEqual(currentPropertyAmenitiesState);
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<PropertyAmenities />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have three children', () => {
    const wrapper = render(<PropertyAmenities />);
    expect(wrapper['0'].children).toHaveLength(3);
  });
});