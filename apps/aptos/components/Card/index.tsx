import { AtomBox, AtomBoxProps } from '@pancakeswap/ui'

const Card = (props: AtomBoxProps) => <AtomBox width="100%" padding="20px" borderRadius="default" {...props} />

export const LightCard = (props: AtomBoxProps) => <AtomBox border="1" backgroundColor="backgroundAlt" {...props} />
