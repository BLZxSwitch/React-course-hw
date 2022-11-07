import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './app';

describe('app', () => {
  it("should have class 'red'", () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      const root = createRoot(container);
      root.render(<App />);
    });
    const div = container.querySelector('div');
    expect(div?.classList.contains('container')).toBeTruthy();
  });
});
