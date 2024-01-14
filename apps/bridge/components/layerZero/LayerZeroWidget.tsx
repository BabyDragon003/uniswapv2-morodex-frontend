import { useEffect } from 'react'
import { Box, PancakeTheme } from '@pancakeswap/uikit'
import { darkTheme, lightTheme } from 'components/layerZero/theme'

declare global {
  interface Window {
    aptosBridge?: any
  }
  interface Document {
    querySelector?: any
  }
}

export const LayerZeroWidget = ({ theme }: { theme: PancakeTheme }) => {
  useEffect(() => {
    const themeText = theme.isDark ? 'dark' : 'light'
    const themeColor = theme.isDark ? darkTheme : lightTheme

    if (window.aptosBridge) {
      document.body.classList.add(themeText)
      document.querySelector('aptos-bridge').setTheme(themeColor)
    }

    return () => {
      document.body.classList.remove(themeText)
        }

        .css-11saint rect {
          fill: #d9d9d9;
        }

        .css-1ay9vb9 .css-9k6lzc-LzButton,
        .css-1ay9vb9 .css-1s9mcc4-LzButton {
          border: 1px solid #1fc7d4;
          border-radius: 8px;
          color: #1fc7d4;
          background: transparent;
        }

        .dark [data-radix-popper-content-wrapper] {
          background-color: #ffffff;
          border-radius: 18px;
        }
        .dark [data-radix-popper-content-wrapper] div {
          color: #280d5f;
        }
        .dark [data-radix-popper-content-wrapper] svg {
          fill: #ffffff;
        }

        .light [data-radix-popper-content-wrapper] {
          background-color: black;
          border-radius: 18px;
        }
        .light [data-radix-popper-content-wrapper] div {
          color: #ffffff;
        }
        .light [data-radix-popper-content-wrapper] svg {
          fill: black;
        }
      `}</style>
      {/* @ts-ignore */}
      <aptos-bridge class="aptos-bridge-container" />
    </Box>
  )
}
