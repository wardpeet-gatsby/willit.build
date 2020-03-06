context("All pages", () => {
  it("audits the homepage", () => {
    cy.visit("/")
    cy.audit({
      performance: 95,
      accessibility: 65,
      "best-practices": 78,
      seo: 70,
      pwa: 50,
    })
  })

  it("audits the chart-demo page", () => {
    cy.visit("/chart-demo")
    cy.audit({
      performance: 91,
      accessibility: 69,
      "best-practices": 79,
      seo: 70,
      pwa: 50,
    })
  })

  it("audits the methodology-faq", () => {
    cy.visit("/methodology-faq")
    cy.audit({
      performance: 97,
      accessibility: 69,
      "best-practices": 78,
      seo: 70,
      pwa: 59,
    })
  })

  it("audits the methodology-faq", () => {
    cy.visit("/methodology-faq")
    cy.audit({
      performance: 97,
      accessibility: 69,
      "best-practices": 78,
      seo: 70,
      pwa: 59,
    })
  })

  it("audits the api-playground", () => {
    cy.visit("/api-playground")
    cy.audit({
      performance: 97,
      accessibility: 69,
      "best-practices": 78,
      seo: 70,
      pwa: 59,
    })
  })

  it("audits the calculator", () => {
    cy.visit("/details/type/blog/source/contentful/page-count/512")
    cy.audit({
      performance: 95,
      accessibility: 69,
      "best-practices": 78,
      seo: 70,
      pwa: 40,
    })
  })
})
