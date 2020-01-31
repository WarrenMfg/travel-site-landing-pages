import AboutCopyCSS from '../src/css/AboutCopyCSS.js';
import AboutCSS from '../src/css/AboutCSS.js';
import CarouselCSS from '../src/css/CarouselCSS.js';
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

const cssFiles = [AboutCopyCSS, AboutCSS, CarouselCSS, GoodToKnowCSS, HotelClassCSS, HotelLinksCSS, PropertyAmenitiesCSS, RatingsCirclesCSS, RatingsCSS, RoomFeaturesCSS, RoomTypesCSS, ShowMoreCSS, SuperlativesCSS];
const cssFileNames = ['AboutCopyCSS', 'AboutCSS', 'CarouselCSS', 'GoodToKnowCSS', 'HotelClassCSS', 'HotelLinksCSS', 'PropertyAmenitiesCSS', 'RatingsCirclesCSS', 'RatingsCSS', 'RoomFeaturesCSS', 'RoomTypesCSS', 'ShowMoreCSS', 'SuperlativesCSS'];

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
