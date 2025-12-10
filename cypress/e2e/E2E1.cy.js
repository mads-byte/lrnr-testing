describe('Quiz generation form sumbission', () => {
  it('should show errors for empty fields', () => {
    cy.visit('http://localhost:5173/quiz')
    cy.get('[data-testid="cypress-submit"]').click()
    cy.get('[data-testid="cypress-error"]')
      .should('exist')
      .should('have.text', 'All fields are required')

  })

})