let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Header", function () {
  it("Check the Categories", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#hs-eu-confirmation-button').should('be.visible').click();
    cy.get('#int-button-language').should('be.visible').click();
    cy.get('.main-nav__list-item--dropdown > .main-nav__list-item-link--lvl1')
      .trigger('mouseover')
      .should('be.visible')
      .click();
  });
});
