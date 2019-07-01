  if (!a || !b) return false
  return a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
}
