/// <reference types="cypress" />
// 4. Validación de Formularios

describe('Valida el formulario', () => {
    it('Submit al formulario y alerta de error', () => {
       cy.visit('/index.html');
        //en el HTML agregar data-cy="formulario"
        // Submit sin datos
        cy.get('[data-cy="formulario"]')
            .submit();
            // UI.js - imprimirAlerta - agregar data-cy con scripting
            // Seleccionar la alerta
            cy.get('[data-cy="alerta"]')
                // Para ller el texto de la alerta
                .invoke('text')
                .should('equal', 'Todos los campos son Obligatorios');
            
            cy.get('[data-cy=alerta]')
            // Revisar si tiene una clase
                .should('have.class', 'alert-danger');
    })

    
    
});