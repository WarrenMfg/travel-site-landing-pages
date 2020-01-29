import Superlatives from '../src/components/Superlatives.jsx';
import {render} from 'enzyme';


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

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<Superlatives certOfExcellence={1} greenLeaders={1} />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have two children', () => {
    const wrapper = render(<Superlatives certOfExcellence={1} greenLeaders={1} />);
    expect(wrapper['0'].children).toHaveLength(2);
  });
});