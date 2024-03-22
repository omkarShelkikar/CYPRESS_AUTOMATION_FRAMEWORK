///  <reference types="Cypress" />

describe("Test contact us page",() => {

it("Positive submission",() =>{
   // cy.visit("https://webdriveruniversity.com/")
   // cy.get('#contact-us > .thumbnail').click({force:true})
   // cy.wait(100000)
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    cy.get('[name="first_name"]').type("Omkar")
    cy.get('[name="last_name"]').type("Shelkikar")
    cy.get('[name="email"]').type("omkarsh@gmail.com")
    cy.get('textarea.feedback-input').type("Any text here")
    cy.get('[type="submit"]').click()

})


it.only("Negative submission",() =>{

    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    cy.get('[name="first_name"]').type("Omkar")
    cy.get('[name="last_name"]').type("Shelkikar")
    cy.get('textarea.feedback-input').type("Any text here")
    cy.get('[type="submit"]').click()

})






})