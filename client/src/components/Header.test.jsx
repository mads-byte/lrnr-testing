import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('renders logo and navigation links', () => {
    render(
        <MemoryRouter> {/* router context for links to be read */}
            <Header />
        </MemoryRouter>
    );

    expect(screen.getByText('lrnr')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Quiz Generation')).toBeInTheDocument();
});