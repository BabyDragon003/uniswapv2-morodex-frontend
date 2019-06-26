describe('Info Page', () => {
  it('loads info overview', () => {
    cy.visit('/info')
    cy.get('#info-overview-title').should('be.visible')
  })

  it('loads info pools page', () => {
    cy.visit('/info/pairs')
    cy.get('#info-pools-title').should('be.visible')
  })

  // skip this test because it's not stable
  it.skip('loads single token page', () => {
    cy.visit('/info/token/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c')
    cy.get('#info-token-name-title', { timeout: 15000 }).should('be.visible')
  })
})
