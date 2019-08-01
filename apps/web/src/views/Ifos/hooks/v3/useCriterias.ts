import { useMemo } from 'react'

const mapCriteriasToQualifications = {
  needQualifiedNFT: 'isQualifiedNFT',
  needQualifiedPoints: 'isQualifiedPoints',
}

export default function useCriterias(userBasicPoolInfo, ifoCriterias) {
  const criterias = useMemo(
    () =>
      Object.keys(ifoCriterias)
        .filter((key) => ifoCriterias[key])
        .map((key) => ({
          type: mapCriteriasToQualifications[key],
          value: Boolean(userBasicPoolInfo[mapCriteriasToQualifications[key]]),
