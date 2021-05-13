// 6. Editar Citas

/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la Edita', () => {
    // Llena los campos
    it('Campos nueva Cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Mascota');
        cy.get('[data-cy="propietario-input"]')
            .type('Propietario');
        cy.get('[data-cy="telefono-input"]')
            .type('Telefono');
        // Llenar fecha como lo solicita Cypress
        cy.get('[data-cy="fecha-input"]')
            .type('2021-05-03');
       
        cy.get('[data-cy="hora-input"]')
            .type('23:33');
        cy.get('[data-cy="sintomas-textarea"]')
            .type('sintomas textarea');
        cy.get('[data-cy="submit-cita"]')
            .click();
        
        // Cuando cambia el titulo "No hay Citas, comienza creando una" a "Administra tus Citas"
        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas ');

        // se agrega una alerta se creo correctamente.
        cy.get('[data-cy="alerta"]')        
        // Para llenar el texto de la alerta
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
    
         cy.get('[data-cy=alerta]')
        // Revisar si tiene una clase
            .should('have.class', 'alert-success');
    });

    // Edita los campos
    it('Edita la Cita', () => {
        cy.get('[data-cy = "btn-editar"]')
            .click();
        cy.get('[data-cy="mascota-input"]')
        // Limpia el input
            .clear()
            // Escribe Nueva Mascota
            .type('Nueva Mascota');
            // se agrega una alerta se creo correctamente.
        cy.get('[data-cy="alerta"]')        
        // Para llenar el texto de la alerta
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
    })
}); 