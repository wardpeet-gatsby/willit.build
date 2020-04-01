describe("Header", () => {
  beforeEach(() => {
    // Just go on an page that has the header
    cy.visit("/")
  })

  it("should own the product name", () => {
    cy.get("[data-cy=header]").should("be.visible")

    cy.get("[data-cy=header-brand__link]")
      .should("be.visible")
      .and("have.attr", "href", "/")
      .and("contain.text", "Will it Build?")
  })

  it("should own valid menu links", () => {
    cy.get("[data-cy=header]").within(() => {
      cy.get('[href="/methodology-faq"]').should("be.visible")
      // The API playground link is special, since it's not actually a
      // client-side link.
      cy.get('[href="https://willit.build/api-playground"]').should(
        "be.visible"
      )
      cy.get('[href="/calculator"]').should("be.visible")
      cy.get('[href="https://gatsbyjs.com"]').should("be.visible")
    })
  })
})
