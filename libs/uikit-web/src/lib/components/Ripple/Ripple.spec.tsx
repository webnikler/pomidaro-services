import { render } from '@testing-library/react';
import { Ripple } from './Ripple';

describe('Ripple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ripple />);
    expect(baseElement).toBeTruthy();
  });
});
