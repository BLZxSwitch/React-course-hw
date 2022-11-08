import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from "./app";

describe('App', () => {
    test('renders App component', () => {
        render(<App />);
        expect(screen.getByText('22.11.2222')).toBeInTheDocument();
        expect(screen.getByText('23.11.2222')).toBeInTheDocument();
    });
});