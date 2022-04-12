import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('Open webtables', ()=>{
    cy.visit('/')
});

When('Edit user', ()=>{
    cy.get('#edit-record-1').click()
});

And('Edit first name {string}', (first_name)=>{
    cy.get('#firstName').type(first_name)
});

And('Edit last name {string}', (last_name)=>{
    cy.get('#lastName').type(last_name)
});

And('Edit email {string}', (user_Email)=>{
    cy.get('#userEmail').type(user_Email)
});

And('Edit age {string}', (age)=>{
    cy.get('#age').type(age)
});

And('Edit salary {string}', (salary)=>{
    cy.get('#salary').type(salary)
});

And('Edit department {string}', (department)=>{
    cy.get('#department').type(department)
});

And('A user clicks on submit button', ()=>{
    cy.get('#submit').click()
});


