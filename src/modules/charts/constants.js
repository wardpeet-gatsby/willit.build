import gatsbySvg from "./assets/gatsby.svg"
import netlifySvg from "./assets/netlify.svg"
import circleCiSvg from "./assets/circleCi.svg"

export const DetailsChartDimensions = {
  ChartMinHeight: 500,
  ChartDesktopHorizontalPadding: 100,
  LegendMinHeight: 50,
  YAxisWidth: 70,
  ActiveDotRadius: 10,
  ActiveDotDiam: 20,
  ActiveDotInnerRadius: 4,
  AnnotationTipWidth: 200,
  AnnotationTipWindowMargin: 15,
  AnnotationIconSize: 30, // used also to set its height
  AnnotationSpoutWidth: 20,
  AnnotationSpoutHeight: 10,
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

export const ChartDefaultProps = {
  InitialDataScopeDesktop: 14, // in days
  InitialDataScopeMobile: 7, // in days
}
