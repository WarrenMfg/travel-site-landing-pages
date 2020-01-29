import ShowMore from '../src/components/ShowMore.jsx';
import {render} from 'enzyme';

describe('ShowMore.jsx', () => {

  // Jest
  test('it should exist', () => {
    expect(new ShowMore()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new ShowMore()).toBeInstanceOf(ShowMore);
  });

  test('it should have state', () => {
    const newShowMoreState = new ShowMore();
    const currentShowMoreState = {
      activeTab: 'Property amenities',
      amenityIcons: [
        'fas fa-biking',
        'fas fa-fish',
        'fas fa-ice-cream',
        'fas fa-swimmer',
        'fas fa-volleyball-ball',
        'fas fa-caravan',
        'fas fa-glass-martini-alt',
        'fas fa-plane',
        'fas fa-snowboarding',
        'fas fa-hiking',
        'fas fa-bus',
        'fas fa-charging-station',
        'fas fa-desktop',
        'fas fa-mortar-pestle',
        'fas fa-theater-masks',
        'fas fa-music',
        'fab fa-playstation',
        'fas fa-dice',
        'fas fa-baby-carriage',
        'fas fa-horse',
        'fas fa-paw',
        'fas fa-cloud-moon',
        'fas fa-palette',
        'fas fa-camera',
        'fas fa-heart',
        'fas fa-crown',
        'fas fa-map-marker-alt',
        'fas fa-mountain',
        'fas fa-store',
        'fas fa-dog',
        'fas fa-anchor',
        'fas fa-umbrella-beach'
      ],
      roomFeatureIcons: [
        'fas fa-bed',
        'fas fa-coffee',
        'fas fa-concierge-bell',
        'fas fa-dumbbell',
        'fas fa-shower',
        'fas fa-smoking-ban',
        'fas fa-wheelchair',
        'fas fa-wifi'
      ],
      roomTypesIcons: [
        'fas fa-bed',
        'fas fa-campground',
        'fas fa-building',
        'fas fa-couch'
      ]
    };
    expect(newShowMoreState.state).toEqual(currentShowMoreState);
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<ShowMore />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have one child', () => {
    const wrapper = render(<ShowMore />);
    expect(wrapper['0'].children).toHaveLength(1);
  });
});