import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home component', () => {
  it('should render', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Next')).toBeTruthy();
  });
});
