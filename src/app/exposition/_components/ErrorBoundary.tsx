"use client";
import React from 'react';
export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error: any) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-red-500 text-white p-4">
          <p>Crash 3D: {this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
