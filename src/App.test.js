import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react static link', () => {
  const { getByText } = render(<App/>);
  const linkElement = screen.getByText(/react static/i);
  expect(linkElement).toBeInTheDocument();
});
