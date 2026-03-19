import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}
type ErrorState = {
  errorMessage: string;
};
export class ErrorBoundary extends Component<Props, ErrorState> {
  public state: ErrorState = {
    errorMessage: '',
  };
  public componentDidCatch(error: Error) {
    const errorMessage = error.stack ?? 'Unknown error';
    this.setState({ errorMessage });
  }
  public render() {
    if (this.state.errorMessage) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
