import {Component, ErrorInfo, ReactNode} from 'react';
import ErrorPage from './ErrorPage';

interface ErrorBoundaryProps {
  children: ReactNode;

}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props : ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error : Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error : Error, errorInfo : ErrorInfo) {
    console.error("Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
        return <ErrorPage/>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;