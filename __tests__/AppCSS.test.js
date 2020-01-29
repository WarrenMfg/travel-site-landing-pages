import AboutCopyCSS from '../src/css/AboutCopyCSS.js';
import AppCSS from '../src/css/AppCSS.js';
import GoodToKnowCSS from '../src/css/GoodToKnowCSS.js';
import HotelClassCSS from '../src/css/HotelClassCSS.js';
import HotelLinksCSS from '../src/css/HotelLinksCSS.js';
import PropertyAmenitiesCSS from '../src/css/PropertyAmenitiesCSS.js';
import RatingsCirclesCSS from '../src/css/RatingsCirclesCSS.js';
import RatingsCSS from '../src/css/RatingsCSS.js';
import RoomFeaturesCSS from '../src/css/RoomFeaturesCSS.js';
import RoomTypesCSS from '../src/css/RoomTypesCSS.js';
import SuperlativesCSS from '../src/css/SuperlativesCSS.js';

const cssFiles = [AboutCopyCSS, AppCSS, GoodToKnowCSS, HotelClassCSS, HotelLinksCSS, PropertyAmenitiesCSS, RatingsCirclesCSS, RatingsCSS, RoomFeaturesCSS, RoomTypesCSS, SuperlativesCSS];

for (let i = 0; i < cssFiles.length; i++) {
  describe('CSS files', () => {

    // Jest
    test('it should exist', () => {
      expect(cssFiles[i]).toBeDefined();
    });

    test('it should be an object', () => {
      expect(typeof cssFiles[i]).toBe('object');
    });

    test('it should contain properties', () => {
      const keysArray = Object.keys(cssFiles[i]);
      expect(keysArray.length).toBeGreaterThan(0);
    });
  });
}
