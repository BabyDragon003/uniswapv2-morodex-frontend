import { Component, PropsWithChildren, ReactNode } from 'react'

export class ErrorBoundary extends Component<PropsWithChildren<{ fallback?: ReactNode }>, { hasError: boolean }> {
  constructor(props) {
    super(props)
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
