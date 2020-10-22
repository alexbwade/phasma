import { render } from '@testing-library/react';
import Index from '~PAGES/index';

describe('index page', () => {
  it('should render', () => {
    const { container } = render(<Index />);
    expect(container).toHaveTextContent('Next');
  });
});
