import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText("oi");
  expect(linkElement).toBeInTheDocument();
});
