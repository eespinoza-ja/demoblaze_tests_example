export class LoginPage {
    loginUser(){
        cy
            .visit("https://www.demoblaze.com/")
            .get('#login2')
            .click()
            .wait(500)
            .get('#loginusername')
            .type(Cypress.env('username'), {delay: 50})
            .get('#loginpassword')
            .type(Cypress.env('password'), {delay: 50})
            .get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click();
    }
}