describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/login.html')
    cy.get('#loginEmail').type('teste@email.com')
    cy.get('#loginPassword').type('senhaporracaralho')
    cy.get('.btn').click()
    cy.get('#loginError').should('contain', 'Usuário ou senha inválidos!')
  })
})