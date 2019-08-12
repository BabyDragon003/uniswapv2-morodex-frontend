
const useIsRenderCompetitionBanner = () => {
  const competitionStatus = useCompetitionStatus()
  return competitionStatus !== null
}

export default useIsRenderCompetitionBanner
