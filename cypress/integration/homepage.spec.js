describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should verify that the HomePage contains some default layout information", () => {
    cy.get("[data-cy=header]").should("be.visible")

    cy.get("[data-cy=main-title]").should("be.visible")

    cy.get("[data-cy=main-description]").should("be.visible")

    cy.get("[data-cy=benchmark-sites__link]").should(
      "have.attr",
      "href",
      "/#benchmark-sites"
    )

    cy.get("[data-cy=footer]").should("be.visible")
  })
})
