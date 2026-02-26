// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ShadcnRadiant title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ShadcnRadiant/i);
    expect(titleElement).toBeInTheDocument();
});
