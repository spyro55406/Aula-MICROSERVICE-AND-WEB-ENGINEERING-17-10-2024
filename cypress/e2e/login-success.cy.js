function gerarStringAleatoria(tamanho) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';

  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres[indice];
  }

  return resultado;
}

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html')
    const nome = gerarStringAleatoria(4);
    const email = `${nome}@fiap.com.br`;
    const senha = gerarStringAleatoria(6);
    cy.get('#registerName').type(nome);
    cy.get('#registerEmail').type(email);
    cy.get('#registerPassword').type(senha);

    cy.get('.btn').click();
    cy.get('h2').should('contain', 'Login');

    cy.get('#loginEmail').type(email);
    cy.get('#loginPassword').type(senha);
    cy.get('.btn').click();


  })
})