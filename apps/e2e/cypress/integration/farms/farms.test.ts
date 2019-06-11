describe('Farms Page', () => {
  it('loads live farms', () => {
    cy.visit('/farms')
    cy.get('#farms-table').should('be.visible')
  })
        cy.get('#farms-table').children('#table-container').should('be.visible')
      }
    })
  })
})
