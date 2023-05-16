/// <reference types="cypress" />

import { getRandomNumbersSize } from '../../common/getRandomNumbers';

const el = require('./elements').ELEMENTS;


class pages {
    
    acessarProduto(){
        cy.get(el.product)
            .should('contain', 'Daniel').should('be.visible');
        cy.get(el.accCookie)
            .click();
        cy.get(el.product)
            .click();
    }
    addToCart(){
        cy.get(el.addToCart)
            .should('contain', 'Adicionar ao Carrinho').should('be.visible');
        cy.get(el.addToCart)
            .click();
    }
    validadeQtd(){

        const precoUnitario = '1200.00';
        const quantidade = getRandomNumbersSize(1);
        const resultadoEsperado = precoUnitario * quantidade;
        const resultadoFormatado = resultadoEsperado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        const precoDefault = 'R$ 1.200,00';

        cy.get(el.message)
            .should('have.text','Você adicionou Daniel  ao carrinho de compras.');
        cy.get(el.adesao)
            .contains(precoDefault);
        cy.get(el.cartQtd)
            .clear();
        cy.get(el.cartQtd)
            .type(quantidade);
        cy.get(el.updateCart)
            .click();
        cy.get(el.adesao)
            .contains(`R$ ${resultadoFormatado}`);

    }
    ValidadeProduct(){

        const nameProduct = 'Daniel';
        const precoProduct = 'R$ 1.200,00';

        cy.get(el.titleProductPage)
            .should('contain' , nameProduct);
        cy.get(el.valueProduct)
            .contains(precoProduct);
        cy.get(el.addToCart)
            .should('contain', 'Adicionar ao Carrinho')
            .should('be.visible');
        cy.get(el.addToCart)
            .click();
        cy.get(el.titleProductCheckout)
            .should('contain', nameProduct);
        cy.get(el.adesao)
            .contains(precoProduct);
    }
}

export default new pages;