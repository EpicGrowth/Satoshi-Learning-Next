'use client'; // Error Boundaries must be Client Components

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service here
    // For now, just log it to the console for development visibility if possible
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Store error info for potential display or richer fallback
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="p-4 border border-red-500/50 bg-red-500/10 rounded-md text-red-700 dark:text-red-400">
          <h4 className="font-semibold mb-2">Something went wrong</h4>
          <p className="text-sm">
            {this.props.fallbackMessage || "There was an error loading this part of the application. Please try refreshing the page."}
          </p>
          {/* 
          // Optional: Display more error details in development
          process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-2 text-xs">
              <summary>Error Details</summary>
              <pre className="mt-1 whitespace-pre-wrap">
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )
          */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
