import format from "date-fns/format"

export function formatDataForChart({ benchmarks }) {
  const graphDataByCreatedAt = {}

  benchmarks.forEach(({ createdAt, buildType, buildTimes }) => {
    const metrics = buildTimes.find(item => item.platform === `GATSBY_CLOUD`)
    const { timeInMs, timeInMinutes, humanReadableTime } = metrics
    const formatedCreatedAt = format(new Date(createdAt), "M/d/yyyy")

    if (!graphDataByCreatedAt[formatedCreatedAt]) {
      graphDataByCreatedAt[formatedCreatedAt] = {
        createdAt: formatedCreatedAt,
        valuesInMinutes: {},
        humanReadableTime: {},
      }
    }

    if (timeInMs) {
      graphDataByCreatedAt[formatedCreatedAt][buildType] = Math.floor(
        timeInMs / 1000
      )
      graphDataByCreatedAt[formatedCreatedAt].valuesInMinutes[
        buildType
      ] = timeInMinutes
      graphDataByCreatedAt[formatedCreatedAt].humanReadableTime[
        buildType
      ] = humanReadableTime
    }
  })

  const graphData = Object.values(graphDataByCreatedAt).sort(
    (a, b) => new Date(b.createdAt) + new Date(a.createdAt)
  )

  return { graphData }
}
