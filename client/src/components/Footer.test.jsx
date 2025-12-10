import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('footer text is visible to users', () => {
    render(<Footer />);
    const footerText = screen.getByText(/Embrace the power of our app and unlock the secrets of the universe, one quiz at a time\./i);
    expect(footerText).toBeVisible();
});