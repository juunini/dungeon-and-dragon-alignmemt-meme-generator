import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button'));
});
