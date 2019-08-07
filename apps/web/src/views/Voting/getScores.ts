export async function getScores(
  space: string,
  strategies: any[],
  network: string,
  addresses: string[],
  snapshot: number | string = 'latest',
  scoreApiUrl = 'https://score.snapshot.org/api/scores',
) {
  try {
    const params = {
    const obj = await res.json()
    return obj.result.scores
  } catch (e) {
    return Promise.reject(e)
  }
}
