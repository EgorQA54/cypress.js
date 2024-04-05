describe('Автотест на авторизацию', function () {

    it('Правильный логин и правильный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#loginButton').should('be.disabled');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').should('be.enabled');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })

    it('Правильный логин и неправильный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#loginButton').should('be.disabled');
       cy.get('#pass').type('iLoveqastudio2');
       cy.get('#loginButton').should('be.enabled');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })

    it('Проверка валидации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('germandolnikov.ru');
       cy.get('#loginButton').should('be.disabled');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').should('be.enabled');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })

    it('Негативный кейс авторизации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('bandanaonme@mail.ru');
       cy.get('#loginButton').should('be.disabled');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').should('be.enabled');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
       })

    it('Проверка заглавных и строчных букв в логине', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').should('be.enabled');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })

    it('Проверка кнопки восстановления пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('be.enabled');
       cy.get('#forgotEmailButton').click();
       cy.get('#restoreEmailButton').should('be.disabled');
       cy.get('#mailForgot').type('bandanaonme@mail.ru');
       cy.get('#restoreEmailButton').click();
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
       cy.get('#messageHeader').should('be.visible');
       })

})