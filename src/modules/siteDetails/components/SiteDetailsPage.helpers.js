import format from "date-fns/format"

export function formatDataForChart({ benchmarks }) {
  const activePlatorms = {}

  const graphData = benchmarks.map(item => {
    const { createdAt, buildTimes } = item

    const data = buildTimes.reduce(
      (acc, { platform, timeInMs, timeInMinutes }) => {
        const formatted = { ...acc }

        if (timeInMs) {
          if (!activePlatorms[platform]) {
            activePlatorms[platform] = true
          }

          if (!formatted.valuesInMinutes) {
            formatted.valuesInMinutes = {}
          }

          formatted[platform] = Math.floor(timeInMs / 1000)
          formatted.valuesInMinutes[platform] = timeInMinutes
        } else {
          if (!formatted.errors) {
            formatted.errors = {}
          }

          formatted.errors[platform] = `Error`
        }

        return formatted
      },
      {}
    )

    return {
      createdAt: format(new Date(createdAt), "M/d/yyyy"),
      ...data,
    }
  })

  return { graphData, activePlatorms }
}
