import format from "date-fns/format"

export function formatDataForChart({ benchmarks }) {
  return benchmarks.map(item => {
    const { createdAt, buildTimes } = item

    const buildTimesInSeconds = buildTimes.reduce(
      (acc, { platform, timeInMs }) => {
        const formated = { ...acc }

        if (timeInMs) {
          formated[platform] = Math.round(timeInMs / 1000)
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
      ...buildTimesInSeconds,
    }
  })
}
