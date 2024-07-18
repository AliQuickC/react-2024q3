import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ textAlign: 'center' }}>An error occurred while executing the application</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
