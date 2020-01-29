import AboutCopy from '../src/components/AboutCopy.jsx';
import {render} from 'enzyme';

describe('AboutCopy.jsx', () => {

  // Jest
  test('it should exist', () => {
    expect(new AboutCopy()).toBeDefined();
  });

  test('it should be an instance of a class', () => {
    expect(new AboutCopy()).toBeInstanceOf(AboutCopy);
  });

  test('it should have state', () => {
    const newAboutCopyState = new AboutCopy();
    const currentAboutCopyState = {expand: 1, expandCSS: {}};
    expect(newAboutCopyState.state).toEqual(currentAboutCopyState);
  });

  // Enzyme
  it('it should render', () => {
    const wrapper = render(<AboutCopy />);
    expect(wrapper['0']).toHaveProperty('name', 'div');
  });

  it('it should have two children', () => {
    const wrapper = render(<AboutCopy />);
    expect(wrapper['0'].children).toHaveLength(2);
  });
});