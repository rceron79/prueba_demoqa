describe('Agregar Feature', () => {

    it('Success Agregar', ()=>{
        cy.visit('/webtables')
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('Bruce')
        cy.get('#lastName').type('Wayne')
        cy.get('#userEmail').type('bruce@wayne.com')
        cy.get('#age').type('35')
        cy.get('#salary').type('100')
        cy.get('#department').type('TI')
        cy.get('#submit').click()

    })
});