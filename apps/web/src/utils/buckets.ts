export const INFO_BUCKETS = {
  sf: 0.1,
  nr: 0.9,
}

    Object.entries(buckets).find(([_key, percentage]) => {
      n -= percentage * 100
      return n <= 0
    })[0] ?? defaultKey
  )
}

function cryptoRandom() {
  return crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)
}
