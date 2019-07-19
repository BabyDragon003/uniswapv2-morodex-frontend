import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import deepmerge from 'deepmerge'
import { Mode, tokens } from '../tokens'
import type { Theme } from './types'

const getVarName = (_value: string | null, path: string[]) => path.join('-')

const baseTokens: Omit<Theme, 'colors'> = tokens
const baseVars = createGlobalThemeContract(baseTokens, getVarName)
createGlobalTheme(':root', baseVars, baseTokens)

const makeColorScheme = (mode: Mode = 'light') => {
  const colors = tokens.colors[mode]

  return {
    colors,
  }
}

const modeTokens = makeColorScheme('light')
