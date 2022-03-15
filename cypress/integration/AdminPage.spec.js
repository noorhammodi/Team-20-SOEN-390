/// <reference types="cypress" />

const usersHelper = require('../../tests/helperUsers');

const { TEST_ADMIN1 } = usersHelper.testAdmins;

describe('Test Admin Page', () => {
  beforeEach(() => {
    // Delete all previous users
    cy.request('DELETE', '/api/users');

    // Create TEST_PATIENT1
    cy.request(
      'POST',
      '/api/users',
      TEST_ADMIN1,
    ).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Can login with proper user', () => {
    cy.visit('/');
    cy.contains('JeVaisBienAller');
    cy.contains('LOGIN');
    cy.contains('FORGOT PASSWORD?');
    cy.contains('CREATE NEW ACCOUNT');

    cy.get('input[name="email-field"]').type(TEST_ADMIN1.email);
    cy.get('input[name="password-field"]').type(TEST_ADMIN1.password);

    cy.get('button[name="login-button"').click();

    cy.contains(TEST_ADMIN1.firstName);
  });
});
