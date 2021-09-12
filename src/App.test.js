import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading element', () => {
  render(<App />);
  const headingElement = screen.getByText(/Starter template/i);
  expect(headingElement).toBeInTheDocument();
});
