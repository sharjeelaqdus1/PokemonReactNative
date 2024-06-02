import React from 'react';
import {render} from '@testing-library/react-native';
import DetailElement from '../../../src/components/DetailElement';

describe('DetailElement Component', () => {
  it('renders label and value correctly', () => {
    const {getByText} = render(<DetailElement label="Label" value="Value" />);
    expect(getByText('Label')).toBeTruthy();
    expect(getByText('Value')).toBeTruthy();
  });

  it('renders list of values correctly', () => {
    const mockList = [
      {type: {name: 'Item 1'}},
      {type: {name: 'Item 2'}},
      {type: {name: 'Item 3'}},
    ];
    const {getByText} = render(
      <DetailElement label="Label" value={mockList} list />,
    );
    mockList.forEach(item => {
      expect(getByText(item?.type?.name)).toBeTruthy();
    });
  });

  it('renders null value as "Unknown"', () => {
    const {getByText} = render(<DetailElement label="Label" value={null} />);
    expect(getByText('Unknown')).toBeTruthy();
  });

  it('renders undefined value as "Unknown"', () => {
    const {getByText} = render(
      <DetailElement label="Label" value={undefined} />,
    );
    expect(getByText('Unknown')).toBeTruthy();
  });
});
