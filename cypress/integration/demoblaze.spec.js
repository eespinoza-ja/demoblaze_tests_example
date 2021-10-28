import { LoginPage } from "../pages/login-page";
import { ProductsPage } from "../pages/products-page";
import { PurchaseCarPage } from "../pages/purchase-car-page";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const purchaseCarPage = new PurchaseCarPage();

describe('Products Purchase DemoBlaze', function(){   
    it.only('Should loggin',function(){
        loginPage.loginUser();
    });

    it.only('Should add two products to the purchase car',function(){
        productsPage.addProductsPurchaseCar();
    });

    it.only('Should visualize purchase car',function(){
        purchaseCarPage.getPurchaseCar();
    });

    it.only('Should fullfill purchase form',function(){
        purchaseCarPage.fullfillPurchaseForm();
    });

    it.only('Should finish the purchase',function(){
        purchaseCarPage.finishPurchase();
    });
});