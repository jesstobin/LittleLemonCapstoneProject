import { render, screen } from '@testing-library/react';
import BookingPage from '../components/BookingPage.js';
import { BrowserRouter } from "react-router-dom";

test('renders booking form heading', () => {
  render(<BrowserRouter><BookingPage /></BrowserRouter>);
  const linkElement = screen.getByText("Booking Form");
  expect(linkElement).toBeInTheDocument();
});