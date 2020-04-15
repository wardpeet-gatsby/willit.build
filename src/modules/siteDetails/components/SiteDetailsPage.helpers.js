import format from "date-fns/format"

export function formatDataForChart({ benchmarks }) {
  const activePlatorms = {}

  const graphData = benchmarks.map(item => {
    const { createdAt, buildTimes } = item

    const data = buildTimes.reduce(
      (acc, { platform, timeInMs, timeInMinutes }) => {
        const formated = { ...acc }

        if (timeInMs) {
          if (!activePlatorms[platform]) {
            activePlatorms[platform] = true
          }

          if (!formated.valuesInMinutes) {
            formated.valuesInMinutes = {}
          }

          formated[platform] = Math.floor(timeInMs / 1000)
          formated.valuesInMinutes[platform] = timeInMinutes
        } else {
          if (!formated.errors) {
            formated.errors = {}
          }

          formated.errors[platform] = `Error`
        }

        return formated
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
