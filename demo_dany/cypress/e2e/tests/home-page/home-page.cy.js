let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Home Page", function() {
  it("Check the Home button", function () {
    cy.get('.main-nav__list-item-link--home').should('be.visible').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}`);
  });
});