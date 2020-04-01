describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("/calculator")
  })

  it("should verify that the Calculator contains some default layout information", () => {
    // Main content
    cy.get("[data-cy=calculator__title]")
      .should("be.visible")
      .and("contain", "Build time calculator")

    cy.get("[data-cy=calculator__description]")
      .should("be.visible")
      .and(
        "contain",
        "The willit.build build time calculator provides an estimation of build time across each supported Continuous Deployment platform."
      )

    // Social links
    cy.get("[data-cy=social-link__twitter]").should("be.visible")
    cy.get("[data-cy=social-link__share]").should("be.visible")
    cy.get("[data-cy=social-link__clipboard-copy]").should("be.visible")

    // Source and Page dropdown
    cy.get("[id=content-source-control]").should("be.visible")
    cy.get("[id=page-count-control]").should("be.visible")

    // Calculator metrics
    cy.contains("Fastest Content Build").should("be.visible")
    cy.contains("Runner-Up").should("be.visible")
    cy.contains("Uncached Build").should("be.visible")
  })

  it("should move when selecting Comiscjs in the source control dropdown", () => {
    cy.get("[id=content-source-control]")
      .should("be.visible")
      .select("COSMICJS")

    cy.url().should(
      "contain",
      "/calculator/type/blog/source/cosmicjs/page-count/512"
    )
  })

  it("should move when selecting 32768 in the page count control dropdown", () => {
    cy.get("[id=page-count-control]")
      .should("be.visible")
      .select("32768")

    cy.url().should(
      "contain",
      "/calculator/type/blog/source/contentful/page-count/32768"
    )
  })
})
