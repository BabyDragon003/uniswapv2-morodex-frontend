describe('NFTs Page', () => {
  it('loads NFTs hot collections', () => {
    cy.visit('/nfts')
    cy.getBySel('nfts-hot-collections').should('be.visible')
    cy.getBySel('hot-collection-card').should('have.length.at.least', 1)
  })

  it('loads newest NFTs', () => {
    cy.visit('/nfts')
    cy.getBySel('nfts-newest').should('be.visible')
    cy.getBySel('newest-nft-card').should('have.length.at.least', 10)
  })

  it.skip('shows subgraph health indicator', () => {
    cy.visit('/nfts')
    cy.get('#open-settings-dialog-button').click()
    cy.get('#toggle-subgraph-health-button').click({ force: true })
    cy.get(`[aria-label="Close the dialog"]`).click({ force: true })
    cy.getBySel('subgraph-health-indicator').should('be.visible')
  })
