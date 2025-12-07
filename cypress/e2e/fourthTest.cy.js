describe('template spec', () => {
  it('header says Rewarding', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="cypress-h3"]')
      .should('exist')
      .should('have.text', 'Rewarding')
  })
})