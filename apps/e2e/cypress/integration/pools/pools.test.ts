describe('Pools Page', () => {
  beforeEach(() => {
    cy.visit('/pools')
  })

    cy.get('#pools-table').should('be.visible')
  })
})
