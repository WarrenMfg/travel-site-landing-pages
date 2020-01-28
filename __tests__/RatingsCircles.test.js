import RatingsCircles from '../src/components/RatingsCircles.jsx';

describe('RatingsCircles.jsx', () => {
  test('it should exist', () => {
    expect(new RatingsCircles()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new RatingsCircles()).toBeInstanceOf(RatingsCircles);
  });

  test('it should not have state', () => {
    const newRatingsCirclesState = new RatingsCircles();
    expect(newRatingsCirclesState.state).toBeUndefined();
  });
});