export class ProductsPage {
    addProductsPurchaseCar(){
        cy
            .wait(500)
            .get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
            .wait(500)
            .get('.col-sm-12 > .btn')
            .click()
            .get('.active > .nav-link')
            .click()
            .wait(500)
            .get(':nth-child(2) > .card > .card-block > .card-title > .hrefch')
            .click()
            .wait(500)
            cy.get('.col-sm-12 > .btn')
            .click();
    }
}