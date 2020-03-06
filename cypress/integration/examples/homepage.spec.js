describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should verify that the HomePage owns a banner", () => {
    cy.get("[data-cy=main-title]")
      .should("be.visible")
      .and(
        "contain",
        "Making your build process lightning fast, just like your website"
      )
  })
})
