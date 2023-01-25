import React from 'react';
import { Button } from '../button';
import { Counter } from '../counter';
import './panel.css';

interface PanelState {
  timerId: number | null;
  seconds: number;
  json?: Record<string, string | number | boolean>;
}

export class Panel extends React.Component<{}, PanelState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      timerId: null,
      seconds: 0,
    };
  }

  handleClick = () => {
  };

  getFiles = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => this.setState({ json }));
  };

  componentDidMount() {
    window.addEventListener('click', this.handleClick);
    this.getFiles();
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
    this.clearTimer();
  }

  componentDidUpdate() {
    if (this.state.seconds === 5) {
      this.getFiles();
    }
  }

  shouldComponentUpdate(_: {}, nextState: PanelState) {
    return nextState.seconds <= 100000;
  }

  runTimer = () => {
    if (!this.state.timerId) {
      const timerId = window.setInterval(() => {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1,
        }));
      }, 1000);

      this.setState({ timerId });
    }
  };

  stopTimer = () => {
    if (this.state.timerId !== null) {
      window.clearInterval(this.state.timerId);
      this.setState({ timerId: null });
    }
  };

  clearTimer = () => {
    this.setState({ seconds: 0 });
    this.stopTimer();
  };

  render(): React.ReactNode {
    return (
      <div className="panel">
        <Button onClick={this.runTimer}>Run</Button>
        <Button onClick={this.stopTimer}>Pause</Button>
        <Button onClick={this.clearTimer}>Clear</Button>
        <Counter count={this.state.seconds} />
      </div>
    );
  }
}
