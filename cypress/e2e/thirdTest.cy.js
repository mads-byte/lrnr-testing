describe('template spec', () => {
  it('button says BEGIN JOURNEY', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="cypress-btn"]')
      .should('exist')
      .should('have.text', 'BEGIN JOURNEY')
  })
})