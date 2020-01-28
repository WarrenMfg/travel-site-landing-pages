import Superlatives from '../src/components/Superlatives.jsx';

describe('Superlatives.jsx', () => {
  test('it should exist', () => {
    expect(new Superlatives()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new Superlatives()).toBeInstanceOf(Superlatives);
  });

  test('it should not have state', () => {
    const newSuperlativesState = new Superlatives();
    expect(newSuperlativesState.state).toBeUndefined();
  });
});