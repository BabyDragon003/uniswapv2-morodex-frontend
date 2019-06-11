import { useContext, useEffect } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import Cookie from 'js-cookie'
import { COOKIE_THEME_KEY, THEME_DOMAIN } from 'hooks/useTheme'


    // if (!getThemeCookie && getThemeCookie !== themeValue) {
      Cookie.set(COOKIE_THEME_KEY, themeValue, { domain: THEME_DOMAIN })
    // }
  }, [themeValue])
}

export default useThemeCookie
