import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders boot screen and taskbar components', () => {
  render(<App />);
  const bootElement = screen.getByText(/Boot up your laptop/i);
  expect(bootElement).toBeInTheDocument();
  const startButton = screen.getByText(/Start/i);
  expect(startButton).toBeInTheDocument();
  const musicPlayerButton = screen.getByRole('button', { name: /Music Player/i });
  expect(musicPlayerButton).toBeInTheDocument();
});

test('toggles and displays music player app with song list and controls', () => {
  render(<App />);
  const musicPlayerButton = screen.getByRole('button', { name: 'Music Player' });
  fireEvent.click(musicPlayerButton);

  expect(screen.getByText(/Track List/i)).toBeInTheDocument();
  const zenzenzenseElements = screen.getAllByText(/Zenzenzense/i);
  expect(zenzenzenseElements.length).toBeGreaterThanOrEqual(1);
  expect(screen.queryByText(/Lost & Found/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Boot Melody/i)).not.toBeInTheDocument();
  expect(screen.getByTitle(/Click to seek/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: '▶ Play' })).toBeInTheDocument();
});
