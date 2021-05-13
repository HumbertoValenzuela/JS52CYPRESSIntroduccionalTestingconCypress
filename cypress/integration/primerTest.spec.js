/// <reference types="cypress" />
// reference para que tenga autocompletado
// Documentarción de cypress
// https://docs.cypress.io/guides/references/best-practices
// Buena práctica es colocar en el html el atributo data-cy para
// hacer referencia al elemento
describe('Carga La Página principal', () => {
    it('Carga la pagina principal', () => {

        // Indicar a Cypress donde se conectará
        cy.visit('/index.html');

        // Verificar que muestra el Titulo h1. contains verifica que un elemento del DOM existe
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');
        // h1 debe de existir. get sirve para obtener elementos del DOM
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');
        
            // Verificar el texto de las citas
            cy.get('[data-cy="citas-heading"]')
                .invoke('text')
                .should('equal', 'No hay Citas, comienza creando una');
            
            // Creará una imagen hasta este momento
            cy.screenshot();
    });
});

// 3. Los Atributos en Cypress
// Buenas prácticas para escribir selectores