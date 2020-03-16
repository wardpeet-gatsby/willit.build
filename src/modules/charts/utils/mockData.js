import sub from "date-fns/sub"
import add from "date-fns/add"
import format from "date-fns/format"

function randomizeValue(val) {
  const factor = Math.floor(Math.random() * 10)

  return Math.round(val * ((100 + factor) / 100))
}

export function getMockData(days) {
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
    const itemDate = format(add(startDate, { days: i }), "M/d/yyyy")

    if (itemDate === `12/27/2019`) {
      baseValues.gatsby -= 8
      baseValues.netlify -= 36
      baseValues.circleCi -= 39
    }

    if (itemDate === `1/16/2020`) {
      baseValues.gatsby -= 5
      baseValues.netlify -= 20
      baseValues.circleCi -= 22
    }

    data[i] = {
      date: itemDate,
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
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      link: `http://gatsbyjs.com`,
      linkText: `Read more about that`,
    },
    {
      date: `1/16/2020`,
      label: `Feature release 1.2`,
    },
    {
      date: `2/29/2020`,
      label: `Feature release 1.3`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      link: `http://gatsbyjs.com`,
    },
    {
      date: `3/2/2020`,
      label: `Feature release 1.4`,
    },
  ]
}
