import React from 'react'
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(e: any) {
    return { hasError: true };
  }
  componentDidCatch(error: any, info: any) {
    console.error("ErrorBoundry caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          An error occured <Link to="/home">Click here</Link> to go back to
          homepage
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
