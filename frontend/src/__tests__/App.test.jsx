import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// Helper: simulate desktop/mobile viewport width before rendering.
// App reads window.innerWidth in a useEffect to decide layout.
function setScreenWidth(width) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
}

describe('App smoke and navigation tests', () => {
  test('renders desktop home experience by default', () => {
    // 1200px should trigger desktop mode.
    setScreenWidth(1200);

    render(<App />);

    // Use role-based queries to test what users and screen readers see.
    expect(screen.getByRole('button', { name: /portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /galit tauber/i })).toBeInTheDocument();
  });

  test('navigates between desktop sections', async () => {
    // userEvent simulates realistic interactions and returns promises.
    setScreenWidth(1200);
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole('button', { name: /software/i }));
    // findByRole waits for async UI updates (useful with animations/transitions).
    expect(await screen.findByRole('heading', { name: /software engineering/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /mechanical/i }));
    expect(await screen.findByRole('heading', { name: /mechanical engineering/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /home/i }));
    expect(await screen.findByRole('heading', { name: /galit tauber/i })).toBeInTheDocument();
  });

  test('renders mobile layout for small screens', async () => {
    // 480px should trigger mobile mode.
    setScreenWidth(480);

    render(<App />);

    // Mobile page includes a "Projects" section heading.
    expect(await screen.findByRole('heading', { name: /^projects$/i })).toBeInTheDocument();

    // waitFor retries until the assertion passes or times out.
    // Here we assert desktop-only navbar branding is gone in mobile mode.
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /portfolio/i })).not.toBeInTheDocument();
    });
  });
});
