describe('IFO Page', () => {
  it('loads Next IFO page', () => {
    cy.visit('/ifo')
    cy.get('#current-ifo').should('be.visible')
  })
})
