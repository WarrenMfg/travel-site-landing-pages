import Ratings from '../src/components/Ratings.jsx';

describe('Ratings.jsx', () => {
  test('it should exist', () => {
    expect(new Ratings()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new Ratings()).toBeInstanceOf(Ratings);
  });

  test('it should not have state', () => {
    const newRatingsState = new Ratings();
    expect(newRatingsState.state).toBeUndefined();
  });
});