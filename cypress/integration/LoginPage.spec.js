/// <reference types="cypress" />

describe('Navigation', () => {
  it('Can visit homepage', () => {
    cy.visit('/');
    cy.contains('JeVaisBienAller');
    cy.contains('LOGIN');
    cy.contains('FORGOT PASSWORD?');
    cy.contains('CREATE NEW ACCOUNT');
  });
});
