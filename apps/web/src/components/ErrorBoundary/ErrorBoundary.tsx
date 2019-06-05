import { Component, PropsWithChildren, ReactNode } from 'react'

export class ErrorBoundary extends Component<PropsWithChildren<{ fallback?: ReactNode }>, { hasError: boolean }> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error) {
    // Update state so the next render will show the fallback UI.
    }

    return this.props.children
  }
}
