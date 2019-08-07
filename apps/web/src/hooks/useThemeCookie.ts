import { useContext, useEffect } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import Cookie from 'js-cookie'
import { COOKIE_THEME_KEY, THEME_DOMAIN } from 'hooks/useTheme'

const useThemeCookie = () => {
  const theme = useContext(StyledThemeContext)
  const themeValue = theme.isDark ? 'dark' : 'dark'

  useEffect(() => {
