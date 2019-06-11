import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { PageMeta } from 'components/Layout/Page'
import { Box } from '@pancakeswap/uikit'
import { usePotteryFetch } from 'state/pottery/hook'
import FAQ from './components/FAQ'

const Pottery: React.FC<React.PropsWithChildren> = () => {
  usePotteryFetch()
  const potWrapperEl = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    window.scrollTo({
      top: potWrapperEl.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <Box position="relative">
      <PageMeta />
      <Banner handleScroll={handleScroll} />
      <Box ref={potWrapperEl}>
        <Pot />
      </Box>
      <FinishedRounds />
      <HowToPlay />
      <PrizeFunds />
      <FAQ />
      {createPortal(
        <>
          <SubgraphHealthIndicator subgraphName="pancakeswap/pottery" />
        </>,
        document.body,
      )}
    </Box>
  )
}

export default Pottery
