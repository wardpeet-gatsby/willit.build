export function formatDataForChart({ benchmarks, chartActiveLines }) {
  const graphDataByCreatedAt = {}

  benchmarks.forEach(({ createdAt, buildType, buildTimes }) => {
    // TODO: Maybe we should think of a way to avoid using this array that way
    const metrics = buildTimes[0]
    const { timeInMs, timeInMinutes, humanReadableTime } = metrics

    const createdAtDate = new Date(createdAt)

    const year = createdAtDate.getUTCFullYear()
    const month = createdAtDate.getUTCMonth() + 1 // because values starts with 0
    const day = createdAtDate.getUTCDate()

    const formatedCreatedAt = `${year}-${month}-${day}`

    if (!graphDataByCreatedAt[formatedCreatedAt]) {
      graphDataByCreatedAt[formatedCreatedAt] = {
        createdAt: formatedCreatedAt,
        valuesInMinutes: {},
        humanReadableTime: {},
      }
    }

    if (timeInMs && chartActiveLines[buildType]) {
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

  return graphData
}

export function filterAnnotations({ annotations, contentSource }) {
  return annotations.filter(item => {
    if (item.contentSource && item.contentSource !== contentSource) {
      return false
    }

    return true
  })
}
