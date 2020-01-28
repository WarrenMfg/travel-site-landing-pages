import GoodToKnow from '../src/components/GoodToKnow.jsx';

describe('GoodToKnow.jsx', () => {
  test('it should exist', () => {
    expect(new GoodToKnow()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new GoodToKnow()).toBeInstanceOf(GoodToKnow);
  });

  test('it should have state', () => {
    const newGoodToKnowState = new GoodToKnow();
    const currentGoodToKnowState = {infoPopup: false};
    expect(newGoodToKnowState.state).toEqual(currentGoodToKnowState);
  });
});