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
import ShowMoreCSS from '../src/css/ShowMoreCSS.js';
import SuperlativesCSS from '../src/css/SuperlativesCSS.js';

const cssFiles = [AboutCopyCSS, AppCSS, GoodToKnowCSS, HotelClassCSS, HotelLinksCSS, PropertyAmenitiesCSS, RatingsCirclesCSS, RatingsCSS, RoomFeaturesCSS, RoomTypesCSS, ShowMoreCSS, SuperlativesCSS];
const cssFileNames = ['AboutCopyCSS', 'AppCSS', 'GoodToKnowCSS', 'HotelClassCSS', 'HotelLinksCSS', 'PropertyAmenitiesCSS', 'RatingsCirclesCSS', 'RatingsCSS', 'RoomFeaturesCSS', 'RoomTypesCSS', 'ShowMoreCSS', 'SuperlativesCSS'];

for (let i = 0; i < cssFiles.length; i++) {
  describe('CSS files', () => {

    // Jest
    test(`${cssFileNames[i]} should exist`, () => {
      expect(cssFiles[i]).toBeDefined();
    });

    test(`${cssFileNames[i]} should be an object`, () => {
      expect(typeof cssFiles[i]).toBe('object');
    });

    test(`${cssFileNames[i]} should contain properties`, () => {
      const keysArray = Object.keys(cssFiles[i]);
      expect(keysArray.length).toBeGreaterThan(0);
    });
  });
}
