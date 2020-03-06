context("Home", () => {
  it("audits the homepage", () => {
    cy.visit("/")
    cy.audit()
  })
})
