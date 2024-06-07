import { render, screen } from '@testing-library/react';
import App from '../App';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

jest.mock('swiper/modules', () => ({
  Navigation: (props) => null,
  Pagination: (props) => null,
  Scrollbar: (props) => null,
  A11y: (props) => null,
}))

jest.mock('swiper/modules', () => ({
  SwiperModule: jest.fn(),
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Current Specials!");
  expect(linkElement).toBeInTheDocument();
});
