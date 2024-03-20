import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders without crashing', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });

  test('displays contact image', () => {
    render(<Contact />);
    expect(screen.getByAltText('contact us')).toBeInTheDocument();
  });

  test('renders heading and paragraph text', () => {
    render(<Contact />);
    expect(screen.getByText('Lets talk about everything!')).toBeInTheDocument();
    expect(screen.getByText('Hate forms? Send us an Email instead.')).toBeInTheDocument();
  });

  test('renders email link', () => {
    render(<Contact />);
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:visheshmaurya14@gmail.com');
  });

  test('renders BasicForm component', () => {
    render(<Contact />);
    expect(screen.getByTestId('basic-form')).toBeInTheDocument();
  });
});
