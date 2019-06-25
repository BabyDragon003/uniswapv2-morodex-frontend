import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const SubgraphHealthIndicator = dynamic(() => import('components/SubgraphHealthIndicator'), { ssr: false })

