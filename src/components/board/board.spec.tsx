import React from 'react';
import { screen, render } from '@testing-library/react';
import { Board } from './board';
import { EBoardSize } from './board-enums';

describe('Board', () => {
  it('should render correctly', () => {
    render(<Board size={EBoardSize.Small} />);

    expect(screen.getByLabelText('main-board')).toBeInTheDocument();
  });

  it('should contain expected number of elements', () => {
    render(<Board size={EBoardSize.Small} />);

    expect(screen.getAllByLabelText('board-cell')).toHaveLength(48);
  });
});
