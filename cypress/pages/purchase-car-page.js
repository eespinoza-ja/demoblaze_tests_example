export class PurchaseCarPage {
    getPurchaseCar(){
        cy
            .wait(1000)
            .get(':nth-child(4) > .nav-link')
            .click();
    }

    fullfillPurchaseForm(){
        cy
            .wait(2000)
            .get('.col-lg-1 > .btn')
            .click()
            .get('#name')
            .type(Cypress.env('name'), {delay: 50})
            .get('#country')
            .type(Cypress.env('country'), {delay: 50})
            .get('#city')
            .type(Cypress.env('city'), {delay: 50})
            .get('#card')
            .type(Cypress.env('card'), {delay: 50})
            .get('#month')
            .type(Cypress.env('month'), {delay: 50})
            .get('#year')
            .type(Cypress.env('year'), {delay: 50})
            .get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click();
    }

    finishPurchase(){
        cy
            .wait(500)
            .get('.confirm')
            .click();
    }
}