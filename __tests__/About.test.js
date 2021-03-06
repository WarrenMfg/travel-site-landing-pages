import About from '../src/components/About.jsx';
import {render} from 'enzyme';

describe('About.jsx', () => {

  // Jest
  test('it should exist', () => {
    expect(new About()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new About()).toBeInstanceOf(About);
  });

  test('it should have state', () => {
    const newAboutState = new About();
    const currentAboutState = {
      id: null,
      average: null,
      location: null,
      cleanliness: null,
      service: null,
      value: null,
      certOfExcellence: null,
      coePopup: false,
      greenLeaders: null,
      greenLeadersHover: false,
      greenLeadersPopupHover: false,
      aboutCopy: null,
      image0: null,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null,
      amenityIcon0: null,
      amenityCopy0: null,
      amenityIcon1: null,
      amenityCopy1: null,
      amenityIcon2: null,
      amenityCopy2: null,
      amenityIcon3: null,
      amenityCopy3: null,
      amenityIcon4: null,
      amenityCopy4: null,
      amenityIcon5: null,
      amenityCopy5: null,
      amenityIcon6: null,
      amenityCopy6: null,
      amenityIcon7: null,
      amenityCopy7: null,
      amenityIcon8: null,
      amenityCopy8: null,
      amenityIcon9: null,
      amenityCopy9: null,
      amenityIcon10: null,
      amenityCopy10: null,
      amenityIcon11: null,
      amenityCopy11: null,
      amenityIcon12: null,
      amenityCopy12: null,
      amenityIcon13: null,
      amenityCopy13: null,
      amenityIcon14: null,
      amenityCopy14: null,
      amenityIcon15: null,
      amenityCopy15: null,
      amenityIcon16: null,
      amenityCopy16: null,
      amenityIcon17: null,
      amenityCopy17: null,
      amenityIcon18: null,
      amenityCopy18: null,
      amenityIcon19: null,
      amenityCopy19: null,
      amenityIcon20: null,
      amenityCopy20: null,
      amenityIcon21: null,
      amenityCopy21: null,
      amenityIcon22: null,
      amenityCopy22: null,
      amenityIcon23: null,
      amenityCopy23: null,
      amenityIcon24: null,
      amenityCopy24: null,
      amenityIcon25: null,
      amenityCopy25: null,
      amenityIcon26: null,
      amenityCopy26: null,
      amenityIcon27: null,
      amenityCopy27: null,
      amenityIcon28: null,
      amenityCopy28: null,
      amenityIcon29: null,
      amenityCopy29: null,
      amenityIcon30: null,
      amenityCopy30: null,
      amenityIcon31: null,
      amenityCopy31: null,
      roomFeatureIcon0: null,
      roomFeatureCopy0: null,
      roomFeatureIcon1: null,
      roomFeatureCopy1: null,
      roomFeatureIcon2: null,
      roomFeatureCopy2: null,
      roomFeatureIcon3: null,
      roomFeatureCopy3: null,
      roomFeatureIcon4: null,
      roomFeatureCopy4: null,
      roomFeatureIcon5: null,
      roomFeatureCopy5: null,
      roomFeatureIcon6: null,
      roomFeatureCopy6: null,
      roomFeatureIcon7: null,
      roomFeatureCopy7: null,
      roomTypeIcon0: null,
      roomTypeCopy0: null,
      roomTypeIcon1: null,
      roomTypeCopy1: null,
      roomTypeIcon2: null,
      roomTypeCopy2: null,
      roomTypeIcon3: null,
      roomTypeCopy3: null,
      hotelClass: null,
      hotelStyle: null,
      isSpecialOffered: null,
      special: null
    };

    expect(newAboutState.state).toEqual(currentAboutState);
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<About />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have one child', () => {
    const wrapper = render(<About />);
    expect(wrapper['0'].children).toHaveLength(1);
  });
});