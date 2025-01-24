const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "test",
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe-K-EdIVtFdhM-CoGB5XIJ7hy7DAc14V2SXzEig1HkzyeJgQ/viewform",
    viewportWidth: 1366,
    viewportHeight: 768,
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  execTimeout: 30000,
  taskTimeout: 30000,
  numTestsKeptInMemory: 0
});