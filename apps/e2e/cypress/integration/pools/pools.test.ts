describe('Pools Page', () => {
  beforeEach(() => {
    cy.visit('/pools')
  })

  it('loads live pools', () => {
    cy.get('#pools-table').should('be.visible')
  })

  it('loads finished pools', () => {
