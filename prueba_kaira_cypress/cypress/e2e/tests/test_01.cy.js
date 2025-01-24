let config = Cypress.config();
describe('Prueba_Kaira', function() {

  beforeEach('before each test', function() {
    cy.visit(`${config.baseUrl}`);
  });

  afterEach('after each test', function() {
    cy.wait(2000);
  });

  // Welcome field
  it.skip('Welcome', function() {
    // the text shoud be visible
    cy.get('.F9yp7e').contains('¡Bienvenido!').should('be.visible');
    // the text shoud be visible
    cy.get('.cBGGJ').contains('Completa tus datos de registro en Kaira Digital').should('be.visible');
    // we click on the link "Iniciar sesion en Google" and we should be redirected to the Google page
    cy.get('[jscontroller="A2m8uc"]').should('be.visible').click();
    // we click on the link "Mas Informacion"
    cy.get('.TYUeKb').should('be.visible').click();
    // in the pop-up we click on the "Continuar sin iniciar sesion" button.
    cy.get('.OE6hId > .kCyAyd > .l4V7wb > .NPEfkd').should('be.visible').click({ force: true });
    // we click on the link "Mas Informacion"
    cy.get('.TYUeKb').should('be.visible').click();
    // in the pop-up we click on the "Iniciar sesion" button and we should be redirected to the Google page
    cy.get('.OE6hId > .Y5sE8d > .IrxBzb > .l4V7wb').should('be.visible').click();
    // the text should be visible
    cy.get('.md0UAd').contains('* Indica que la pregunta es obligatoria').should('be.visible');
  });

  // Name field 1  
  it('Name happy flow', function() {
    // the text shoud be visible
    cy.get('#i1 > .M7eMe').contains('Nombre').should('be.visible');
    // the text shoud be visible
    cy.get('.ndJi5d.snByac').contains('Tu respuesta');
    // we type a name
    cy.get('#i1 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .trigger('mouseover')
      .should('be.visible', 'Please fil out this field.')
      .wait(3000)  
      .type('Dany');
  });

  it('Name error message', function() {
    // we click on the field without typing anything 
    cy.get('#i1 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .click();
    // we click in another field
    cy.get('#i6 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .click();
    // the eror message is visible
    cy.get('.RHiWt').contains('Esta pregunta es obligatoria').should('be.visible');
  });

  // Name field 2
  it('Surname happy flow', function() {
    // the text shoud be visible
    cy.get('#i6 > .M7eMe').contains('Apellido').should('be.visible');
    // the text shoud be visible.
    cy.get('.ndJi5d.snByac').contains('Tu respuesta');
    // we type a surname 
    cy.get('#i6 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .trigger('mouseover')
      .should('be.visible', 'Please fil out this field.')
      .wait(3000)  
      .type('Danytest');
  });

  it('Surname error message', function() {
    // we click on the field without typing anything
    cy.get('#i6 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .click();
    // we click in another field
    cy.get('#i11 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .click();
    // the eror message is visible
    cy.get('.RHiWt').contains('Esta pregunta es obligatoria').should('be.visible');
  });

  // E-mail field
  it('E-mail happy flow', function() {
    // the text shoud be visible
    cy.get('#i11 > .M7eMe').contains('Correo eletrónico').should('be.visible');
    // the text shoud be visible
    cy.get('.ndJi5d.snByac').contains('Tu respuesta');
    // we make hover, the text should be visible and we type a correct e-mail
    cy.get('#i11 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .trigger('mouseover')
      .should('be.visible', 'Please fil out this field.')
      .wait(3000)  
      .type('Dany@test.com');
  });

  it('E-mail empty field', function() {
    // we click on the e-mail field without typing any e-mail
    cy.get('#i11 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .click();
    // we click in another field
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .click({ multiple: true });
    // the eror message is visible
    cy.get('.RHiWt').contains('Esta pregunta es obligatoria').should('be.visible'); 
  });

  it('E-mail error format', function() {
    // we type an incorrect e-mail
    cy.get('#i11 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')  
      .type('Danytest.com');
    // the eror message is visible
    cy.get('.RHiWt').contains('e-mail invalido').should('be.visible');  
  });

  // Birthday field
  it('Birthday happy flow', function() {
    // the text shoud be visible
    cy.get('#i16 > .M7eMe').should('be.visible').contains('Fecha de nacimiento');
    // we check if the day field is visible.
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .eq(0)
      .should('be.visible');
    // we check if the month field is visible
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .eq(1)
      .should('be.visible');
    // we check if the year field is visible
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .eq(2)
      .should('be.visible');
    // we fill the day field with a correct value
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .eq(0)
      .type(25);
    // we fill the month field with a correct value
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .eq(1)
      .type(10);
    // we fill the year field with a correct value
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .eq(2)
      .type(1977);
  });

  it('Birthday old date', function() {
    // we fill the day field with an existing date
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .eq(0)
      .type('02');
    // we fill the month field with an existing month
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP ')
      .eq(1)
      .type('02');
    // we fill the year field with an very antique year
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP ')
      .eq(2)
      .type('0001');
    // the eror message is visible
    cy.get('.RHiWt').contains('Fecha no válida').should('be.visible');
  });

  it('Birthday future date', function() {
    // we fill the day field with an inexisting date
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP input')
      .eq(0)
      .type('45');
    // we fill the month field with an inexisting month
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP ')
      .eq(1)
      .type('46');
    // we fill the year field with a future year....more than 2074
    cy.get('#i16 > .M7eMe').closest('.Qr7Oae')
      .find('.Xb9hP ')
      .eq(2)
      .type('2085');
    cy.get('#i16 > .M7eMe').click();
    cy.wait(3000); 
    // the eror message is visible
    cy.get('.RHiWt').contains('Fecha no válida').should('be.visible');
  });

  // Language  field
  it('Language', function() {
    // the language field label should be visible
    cy.get('#i21 > .M7eMe').contains('Idioma').should('be.visible');
    // the language field should be visible and clickable
    cy.get('.KKjvXb > .vRMGwf').should('be.visible').click();
    cy.wait(500);
    // click on the option that says Español
    cy.get('.QXL7Te').find('span.vRMGwf').contains('Español').click();
    // no error message should be visible
    cy.get('.RHiWt').should('not.exist');
    // the selected option in the field should be "Español"
    cy.get('.ry3kXd').find('span.vRMGwf').contains('Español')
      .closest('div')
      .should('have.attr', 'aria-selected', 'true');
  });

  it('Language not choosing', function() {
    // the language field should be visible and clickable
    cy.get('.KKjvXb > .vRMGwf').should('be.visible').click();
    // by clicking once again on the Choose we are not selecting any language 
    cy.get('.ry3kXd').find('span.vRMGwf').contains('Elige').click();
    // the eror message is visible
    cy.get('.RHiWt').contains('Esta pregunta es obligatoria').should('be.visible');
  });

  // How did you meet us field
  it('How did you meet us', function() {
    // the text shoud be visible
    cy.get('#i26 > .M7eMe').should('be.visible').contains('¿Cómo nos has conocido?');
    // we select this option
    cy.get('#i32 > .uHMk6b').should('be.visible').click();
    // we ckeck if the option selected is visible
    cy.get('#i32').should('be.visible').should('have.attr', 'aria-checked', 'true');
    // we select this option
    cy.get('#i35 > .uHMk6b').should('be.visible').click();
    // we ckeck if the option selected is visible
    cy.get('#i35').should('be.visible').should('have.attr', 'aria-checked', 'true');
    // we select this option
    cy.get('#i38 > .uHMk6b').should('be.visible').click();
    // we ckeck if the option selected is visible
    cy.get('#i38').should('be.visible').should('have.attr', 'aria-checked', 'true');
    // we select this option
    cy.get('#i41 > .uHMk6b').should('be.visible').click();
    // we ckeck if the option selected is visible
    cy.get('#i41').should('be.visible').should('have.attr', 'aria-checked', 'true');
    // we select this option
    cy.get('#i44 > .uHMk6b').should('be.visible').click();
    // we ckeck if the option selected is visible
    cy.get('#i44').should('be.visible').should('have.attr', 'aria-checked', 'true');
    // we select this option
    cy.get('#i47 > .uHMk6b').should('be.visible').click();
    // we ckeck if the option selected is visible
    cy.get('#i47').should('be.visible').should('have.attr', 'aria-checked', 'true');
  });

  // How do you rate the integration of AI in the technology sector field
  it('AI qualification', function() {
    // the text shoud be visible
    cy.get('#i50 > .M7eMe').should('be.visible').contains('¿Como calificas la integración de la IA en el sector tecnológico?');
    // we select this option
    cy.get('[data-ratingscale="1"] > .tCu6Cd')
      .trigger('mouseover')
      .should('be.visible')
      .click();
    // we check  if the option is active
    cy.get('[data-ratingscale="1"] > .tCu6Cd .N2RpBe')
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    // we select this option
    cy.get('[data-ratingscale="2"] > .tCu6Cd')
      .trigger('mouseover')
      .should('be.visible')
      .click();
    // we check  if the option is active
    cy.get('[data-ratingscale="2"] > .tCu6Cd .N2RpBe')
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    // we select option
    cy.get('[data-ratingscale="3"] > .tCu6Cd')
      .trigger('mouseover')
      .should('be.visible')
      .click();
    // we check  if the option is active
    cy.get('[data-ratingscale="3"] > .tCu6Cd .N2RpBe')
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    // we select this option
    cy.get('[data-ratingscale="4"] > .tCu6Cd')
      .trigger('mouseover')
      .should('be.visible')
      .click();
    // we check  if the option is active
    cy.get('[data-ratingscale="4"] > .tCu6Cd .N2RpBe')
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    // we click on the clear field option
    cy.get('.M6QFjc > .dMALK > .uArJ5e > .l4V7wb > .NPEfkd')
      .should('be.visible')
      .click();
    // we check if the field is appearing
    cy.get('.M6QFjc > .dMALK > .uArJ5e > .l4V7wb > .NPEfkd')
      .should('not.be.visible')
  });

  // Digitalisation of logistics field
  it('Digitalisation of logistics', function() {
    // we check if the text is correct
    cy.get('#i55 > .M7eMe').should('be.visible').contains('Digitalización de la logística');
    // we check if the text is correct
    cy.get('.XlZoHb .g4s2gf.OIC90c')
      .should('be.visible')
      .contains('Innecesario');
    // we check if the text is correct
    cy.get('.XlZoHb .g4s2gf.OIC90c')
      .should('be.visible')
      .contains('Imprescindible');
    // select option
    cy.get('.eRqjfd').eq(2)
      .should('be.visible')
      .click();
    // check if the option is corect selected
    cy.get('.eRqjfd .Od2TWd').eq(2)
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    // check the clear field if is visible and clickable   
    cy.get('#i55 > .M7eMe').closest('.Qr7Oae')
      .find('.NPEfkd.RveJvd.snByac')
      .should('be.visible')
      .click();
  });

  it('Digitalisation of logistics options', function() {
    cy.get('.eRqjfd').eq(0)
      .should('be.visible')
      .click();
    // check if the option is corect selected
    cy.get('.eRqjfd .Od2TWd').eq(0)
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    cy.get('.eRqjfd').eq(1)
      .should('be.visible')
      .click();
    // check if the option is corect selected
    cy.get('.eRqjfd .Od2TWd').eq(1)
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    cy.get('.eRqjfd').eq(2)
      .should('be.visible')
      .click();
    // check if the option is corect selected
    cy.get('.eRqjfd .Od2TWd').eq(2)
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    cy.get('.eRqjfd').eq(3)
      .should('be.visible')
      .click();
    // check if the option is corect selected
    cy.get('.eRqjfd .Od2TWd').eq(3)
      .should('be.visible')
      .should('have.attr', 'aria-checked', 'true');
    });

  // Logistical development field
  it('Logistical development', function() {
    // the test should fail because we have the text incorrect
    cy.get('.M7eMe').contains('Desarrollo logístico').should('be.visible');
    // we check if the text is correct
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.XlZoHb .g4s2gf.OIC90c')
      .contains('Innecesario')
      .should('be.visible');
    // the test should fail because we have the text incorrect
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.XlZoHb .g4s2gf.OIC90c')
      .contains('Imprescindible')
      .should('be.visible');
    // select option 3
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(2)
      .should('be.visible')
      .click();
    // check if the option is correct selected 
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(2)
      .should('be.visible')
      .find('.Od2TWd')
      .should('have.attr', 'aria-checked', 'true');
    // check the clear field if is visible and clickable
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.NPEfkd').contains('Borrar selección')
      .should('be.visible')
      .click();
  });

  it('Logistical development options', function() {
    // select option 1
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(0)
      .should('be.visible')
      .click();
    // check if the option is correct selected 
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(0)
      .should('be.visible')
      .find('.Od2TWd')
      .should('have.attr', 'aria-checked', 'true');
      //select option 2
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(1)
      .should('be.visible')
      .click();
    // check if the option is correct selected  
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(1)
      .should('be.visible')
      .find('.Od2TWd')
      .should('have.attr', 'aria-checked', 'true');
    // select option 3
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(2)
      .should('be.visible')
      .click();
    // check if the option is correct selected  
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(2)
      .should('be.visible')
      .find('.Od2TWd')
      .should('have.attr', 'aria-checked', 'true');
    // select option 4
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(3)
      .should('be.visible')
      .click();
    // check if the option is correct selected 
    cy.get('.M7eMe').contains('Desarrollo logístico').closest('.Qr7Oae')
      .find('.eRqjfd').eq(3)
      .should('be.visible')
      .find('.Od2TWd')
      .should('have.attr', 'aria-checked', 'true');
  });

  // Info field
  it('Info field', function() {
    // check if the text & log is correct
    cy.get('.cTDvob > .M7eMe').should('be.visible');
    cy.get('.HxhGpf').should('be.visible');
  });

  // Clear form button
  it('Clear form button', function() {
    // click on the clear form button
    cy.get('.nYdzXd > .uArJ5e > .l4V7wb > .NPEfkd')
      .contains('Borrar formulario')
      .should('be.visible')
      .click();
    // choose the option cancel form
    cy.get('.OE6hId > .M9Bg4d > .l4V7wb > .NPEfkd')
      .contains('Cancelar')
      .should('be.visible')
      .click();
    // choose the option clear form
    cy.get('.nYdzXd > .uArJ5e > .l4V7wb > .NPEfkd')
      .contains('Borrar formulario')
      .should('be.visible')
      .click();
    // click on the button clear form
    cy.get('.OE6hId > [data-id="EBS5u"] > .l4V7wb > .NPEfkd')
      .contains('Borrar formulario')
      .should('be.visible')
      .click();
  });

  // Submit button
  it('Submit button', function() {
    //click on the submit button
    cy.get('.lRwqcd > .uArJ5e > .l4V7wb')
      .contains('Enviar')
      .should('be.visible');
    // for the complete submission of the form we would need a test user and password
  });
});
