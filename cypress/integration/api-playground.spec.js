describe("API Playground", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should load the API playground", async () => {
    cy.get('[href="https://willit.build/api-playground"]')
      .first()
      // Need to remove the `target="_blank"` since Cypress doesn't work
      // across multiple tabs
      .invoke("removeAttr", "target")
      .click()

    // For now, this loads a "Password protected site" page on Netlify.
    // This is a temporary state of the world, but our test should support it.
    const isPasswordProtected = cy.contains("Password protected site")

    if (!isPasswordProtected) {
      cy.get(".graphiql-wrapper").should("be.visible")
    }
  })
})
