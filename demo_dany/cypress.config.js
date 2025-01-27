const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1380,
  viewportHeight: 780,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://helosauna.com/",
    viewportWidth: 1000,
    viewportHeight: 660,
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
  },

  defaultCommandTimeout: 120000,
  execTimeout: 120000,
  taskTimeout: 120000,
  numTestsKeptInMemory: 0
});