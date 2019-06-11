import { useMemo } from 'react'

const mapCriteriasToQualifications = {
  needQualifiedNFT: 'isQualifiedNFT',
  needQualifiedPoints: 'isQualifiedPoints',
        .filter((key) => ifoCriterias[key])
        .map((key) => ({
          type: mapCriteriasToQualifications[key],
          value: Boolean(userBasicPoolInfo[mapCriteriasToQualifications[key]]),
        })),
    [ifoCriterias, userBasicPoolInfo],
  )

  const isEligible = useMemo(() => criterias.some((criteria) => criteria?.value), [criterias])

  return {
    isEligible,
    criterias,
  }
}
