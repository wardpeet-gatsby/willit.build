import sub from "date-fns/sub"
import add from "date-fns/add"
import format from "date-fns/format"

function randomizeValue(val) {
  const factor = Math.floor(Math.random() * 10)

  return Math.round(val * ((100 + factor) / 100))
}

export function getMockData(days, options = {}) {
  const baseValues = {
    gatsby: 50,
    netlify: 340,
    circleCi: 370,
  }

  const period = days || 100
  const today = new Date()
  const startDate = sub(today, {
    days: days || 100,
  })

  const data = []

  for (let i = 0; i < period; i++) {
    if (i === 45) {
      baseValues.gatsby -= 8
      baseValues.netlify -= 36
      baseValues.circleCi -= 39
    }

    if (i === 65) {
      baseValues.gatsby -= 5
      baseValues.netlify -= 20
      baseValues.circleCi -= 22
    }

    data[i] = {
      date: format(add(startDate, { days: i }), "M/d/yyy"),
      gatsby: randomizeValue(baseValues.gatsby),
      netlify: randomizeValue(baseValues.netlify),
      circleCi: randomizeValue(baseValues.circleCi),
    }
  }

  return data
}

export function getMockAnnotations() {
  return [
    {
      date: `12/27/2019`,
      label: `Feature release 1.1`,
    },
    {
      date: `1/16/2020`,
      label: `Feature release 1.2`,
    },
  ]
}
