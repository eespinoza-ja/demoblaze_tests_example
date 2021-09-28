describe('Purchase Product', function(){   
    context('720p resolution', () => {
        beforeEach(() => {
          // Browser with a 720p monitor
          cy.viewport(1280, 720);
        })

        it.only('Should loggin',function(){
            cy.visit("https://www.demoblaze.com/");
            cy.get('#login2').click();
            cy.wait(500);
            cy.get('#loginusername').type("usuario_122333");
            cy.get('#loginpassword').type("usuario_122333");
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        });

        it.only('Should add two products to the purchase car',function(){
            cy.wait(500);
            cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
            cy.wait(500);
            cy.get('.col-sm-12 > .btn').click();
            cy.get('.active > .nav-link').click();
            cy.wait(500);
            cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
            cy.wait(500);
            cy.get('.col-sm-12 > .btn').click();
        });

        it.only('Should visualize purchase car',function(){
            cy.wait(1000);
            cy.get(':nth-child(4) > .nav-link').click();
        });

        it.only('Should fullfill purchase form',function(){
            cy.wait(2000);
            cy.get('.col-lg-1 > .btn').click();
            cy.get('#name').type("Usuario1");
            cy.get('#country').type("Ecuador");
            cy.get('#city').type("Cuenca");
            cy.get('#card').type("1234 5678 9012 3456");
            cy.get('#month').type("09");
            cy.get('#year').type("22");
            cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        });

        it.only('Should finish the purchase',function(){
            cy.wait(500);
            cy.get('.confirm').click();
        });
    });
});