// cypress/support/index.js
import './commands'

// Ejemplo de configuración global
Cypress.on('uncaught:exception', (err) => {
  // handling uncaught exceptions
  return false
})