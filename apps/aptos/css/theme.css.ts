import { modeVars } from '@pancakeswap/ui/css/vars.css'
import { tokens } from '@pancakeswap/ui/tokens'
import { createGlobalTheme } from '@vanilla-extract/css'

createGlobalTheme('[data-theme="light"]', modeVars, {
createGlobalTheme('[data-theme="dark"]', modeVars, {
  colors: {
    ...tokens.colors.dark,
    gradientBubblegum: 'linear-gradient(139.73deg, #2F4F60 0%, #323853 100%);',
  },
})
