import format from "date-fns/format"

export function filterDataForChart({ benchmarks /* buildType, pageCount */ }) {
  return benchmarks
    .filter(_item => {
      // here will be real filtering by buildType and pageCount
      // when api mock data is updated to serve different variants
      return true
    })
    .map(item => {
      const { createdAt, buildTimes } = item

      const buildTimesInSeconds = buildTimes.reduce(
        (acc, { platform, buildTime }) => {
          return {
            ...acc,
            [platform]: Math.round(buildTime / 1000),
          }
        },
        {}
      )

      return {
        createdAt: format(new Date(createdAt), "M/d/yyyy"),
        ...buildTimesInSeconds,
      }
    })
    .reverse()
}
