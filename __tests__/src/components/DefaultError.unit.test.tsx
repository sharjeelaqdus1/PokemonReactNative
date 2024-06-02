import React from 'react';
import {render} from '@testing-library/react-native';
import DefaultError from '../../../src/components/DefaultError';

describe('DefaultError Component', () => {
  it('renders with the provided message', () => {
    const {getByText} = render(<DefaultError message="Test error message" />);
    expect(getByText('Error: Test error message')).toBeTruthy();
  });

  it('renders with the provided numeric message', () => {
    const {getByText} = render(<DefaultError message={404} />);
    expect(getByText('Error: 404')).toBeTruthy();
  });

  it('renders with "Unknown" when no message is provided', () => {
    const {getByText} = render(
      <DefaultError message={undefined as unknown as string} />,
    );
    expect(getByText('Error: Unknown')).toBeTruthy();
  });
});
