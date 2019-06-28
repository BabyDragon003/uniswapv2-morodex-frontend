import { Suspense, SuspenseProps, Component } from 'react'

interface State {
  hasError: boolean
}

class SuspenseWithChunkError extends Component<SuspenseProps, State> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error) {
    const isJsChunkLoadError = error.name === 'ChunkLoadError'
    const isCssChunkLoadError = error.code === 'CSS_CHUNK_LOAD_FAILED'
    if (hasError) {
      return fallback
    }

    return <Suspense {...this.props} />
  }
}

export default SuspenseWithChunkError
