describe('Eliminar Feature', () => {

    it('Success Eliminar', ()=>{
        cy.visit('/webtables')
        cy.get('#delete-record-1').click()

    })
});