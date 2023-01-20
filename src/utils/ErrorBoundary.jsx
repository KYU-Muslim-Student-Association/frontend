import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <div>Something went wrong </div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
