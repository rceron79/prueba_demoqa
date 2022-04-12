import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('Open webtables', ()=>{
    cy.visit('/')
});

When('Add a new user', ()=>{
    cy.get('#addNewRecordButton').click()
});

And('A user add new first name {string}', (first_name)=>{
    cy.get('#firstName').type(first_name)
});

And('A user add new last name {string}', (last_name)=>{
    cy.get('#lastName').type(last_name)
});

And('A user add email {string}', (user_Email)=>{
    cy.get('#userEmail').type(user_Email)
});

And('A user add age {string}', (age)=>{
    cy.get('#age').type(age)
});

And('A user add salary {string}', (salary)=>{
    cy.get('#salary').type(salary)
});

And('A user add department {string}', (department)=>{
    cy.get('#department').type(department)
});

And('A user clicks on submit button', ()=>{
    cy.get('#submit').click()
});


