import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { cardProps } from './helpers';

import Card from '.';

describe('User Component', () => {
  test('should render all user information as name, lastname and country', () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/Gaetano/)).toBeInTheDocument();
    expect(screen.getByText(/Lastname/)).toBeInTheDocument();
    expect(screen.getByText(/Reijmers/)).toBeInTheDocument();
    expect(screen.getByText(/Country/)).toBeInTheDocument();
    expect(screen.getByText(/Netherlands/)).toBeInTheDocument();
  });
});
