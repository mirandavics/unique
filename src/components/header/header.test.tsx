import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

describe('Header Component', () => {
  test('Unique title', () => {
    render(<Header />);
    const title = screen.getByText('unique');

    expect(title).toBeInTheDocument();
  });
});
