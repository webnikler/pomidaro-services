import { render } from '@testing-library/react';

import UikitWeb from './uikit-web';

describe('UikitWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UikitWeb />);
    expect(baseElement).toBeTruthy();
  });
});
