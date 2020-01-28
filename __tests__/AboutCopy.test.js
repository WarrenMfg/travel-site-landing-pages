import AboutCopy from '../src/components/AboutCopy.jsx';

describe('AboutCopy.jsx', () => {
  test('it should exist', () => {
    expect(new AboutCopy()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new AboutCopy()).toBeInstanceOf(AboutCopy);
  });

  test('it should have state', () => {
    const newAboutCopyState = new AboutCopy();
    const currentAboutCopyState = {expand: 1};
    expect(newAboutCopyState.state).toEqual(currentAboutCopyState);
  });
});