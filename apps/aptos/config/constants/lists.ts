const PANCAKE_APTOS = 'https://tokens.dapp-frontend-prince.web.app/pancakeswap-aptos.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// default lists to be 'active' aka searched across
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

export const OFFICIAL_LISTS: string[] = []
