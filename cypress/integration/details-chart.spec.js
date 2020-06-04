import { BaseBuildType } from "../../base-constants"

const formatPath = require("../../src/modules/data/utils/formatPath")

const CONTENT_SOURCE = `DATOCMS`
const SITE_TYPE = `BLOG`
const BUILD_TYPE = `WARM_START`
const PAGE_COUNT = `512`

const chartPagePath = formatPath({
  prefix: `details`,
  siteType: SITE_TYPE,
  contentSource: CONTENT_SOURCE,
  pageCount: PAGE_COUNT,
  buildType: BaseBuildType[BUILD_TYPE].displayedAs,
})

describe("DetailsChart", () => {
  beforeEach(() => {
    cy.visit(chartPagePath)
  })

  it("should show/hide tooltip on mouseover/mouseout", () => {
    cy.get("[data-cy=main-chart] .recharts-surface").trigger("mouseover")
    cy.get("[data-cy=chart-tooltip]").should("be.visible")

    cy.get("[data-cy=main-chart] .recharts-surface").trigger("mouseout")
    cy.get("[data-cy=chart-tooltip]").should("not.be.visible")
  })

  it("tooltip should contain metrics for all dates", () => {
    cy.get("[data-cy=main-chart] .recharts-surface").trigger("mouseover")

    cy.get("[data-cy=chart-tooltip-metric]").should("have.length", 3)

    cy.get("[data-cy=chart-tooltip-metric]").each(el => {
      cy.get("[data-cy=chart-tooltip-value]", { withinSubject: el })
        .should("be.visible")
        .contains(/\d+m\s\d{1,2}s|Error/gi)
    })

    cy.get("[data-cy=chart-tooltip-date]").should("be.visible")
  })

  it("should hide/show lines on toggle of legend buttons", () => {
    const pathSelector = ".main-chart-area .recharts-area-curve"
    const NUMBER_OF_CURVES = 3

    cy.get(`${pathSelector}[d]`)
      .its("length")
      .should("be.eq", NUMBER_OF_CURVES)

    cy.get("[data-cy=chart-legend-item]")
      .first()
      .find("input")
      .uncheck({ force: true })

    cy.get(`${pathSelector}[d]`)
      .its("length")
      .should("be.eq", NUMBER_OF_CURVES - 1)
  })
})
