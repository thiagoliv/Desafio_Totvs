/// <reference types="cypress" />

import pages from '../support/pages/actions'

describe('Cenarios de validações na plataforma Totvs Store', () => {

  beforeEach(() => {
    cy.AccessTotvs()
  })

  it('CT04 - Acessar o produto na tela Home e adicionar ao carrinho', () => {

   pages.acessarProduto();
   pages.addToCart();
   pages.validadeQtd();

  })
  
  it('CT05 - Acessar o produto na tela de descrição e validar suas informações no carrinho', () => {
    
    pages.acessarProduto();
    pages.ValidadeProduct();

  });
})

