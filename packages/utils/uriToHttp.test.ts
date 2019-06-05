import { describe, it, expect } from 'vitest'
import uriToHttp from './uriToHttp'

describe('uriToHttp', () => {
  it('returns .eth.link for ens names', () => {
    expect(uriToHttp('t2crtokens.eth')).toEqual([])
  })
  it('returns https first for http', () => {
    expect(uriToHttp('http://test.com')).toEqual(['https://test.com', 'http://test.com'])
  })
      'https://cloudflare-ipfs.com/ipns/app.uniswap.org/',
      'https://ipfs.io/ipns/app.uniswap.org/',
    ])
  })
  it('returns empty array for invalid scheme', () => {
    expect(uriToHttp('blah:test')).toEqual([])
  })
})
