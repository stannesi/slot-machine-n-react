import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders slot machine app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Simple React Slot Machine/i);
  expect(titleElement).toBeInTheDocument();
});
