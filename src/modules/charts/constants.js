import gatsbySvg from "./assets/gatsby.svg"
import netlifySvg from "./assets/netlify.svg"
import circleCiSvg from "./assets/circleCi.svg"

export const DetailsChartDimensions = {
  ChartMinHeight: 500,
  LegendMinHeight: 50,
  YAxisWidth: 70,
}

export const BuildServices = {
  gatsby: {
    title: `Gatsby Cloud`,
    icon: gatsbySvg,
  },
  circleCi: {
    title: `Circle CI`,
    icon: circleCiSvg,
  },
  netlify: {
    title: `Netlify`,
    icon: netlifySvg,
  },
}
