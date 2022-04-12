describe('Editar Feature', () => {

    it('Success Editar', ()=>{
        cy.visit('/webtables')
        cy.get('#edit-record-1').click()
        cy.get('#firstName').clear()
        cy.get('#firstName').type('Tony')
        cy.get('#lastName').clear()
        cy.get('#lastName').type('Stark')
        cy.get('#userEmail').clear()
        cy.get('#userEmail').type('tony@stark.com')
        cy.get('#age').clear()
        cy.get('#age').type('40')
        cy.get('#salary').clear()
        cy.get('#salary').type('1000')
        cy.get('#department').clear()
        cy.get('#department').type('CONTABILIDAD')
        cy.get('#submit').click()

    })
});