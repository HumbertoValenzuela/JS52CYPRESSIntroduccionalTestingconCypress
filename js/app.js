// 1. Qué es Cypress
// Cypress ofrece pruebas End to End. Herramienta para hacer testing
// Celenium es parecido, pero Cypress es mejor.
// Cuando escribes pruebas son de código, pero con Cypress es posible
// Ver lo que experimenta. Mas info en cypress.io

// Tipos de Pruebas en Cypress. Es considerado end to ends pero también
// ofrece pruebas unitarias y de integración
// Si Funciona en el navegador, se puede probar en Cypress

// 2. Instalando y Primeros Pasos con Cypress
// Abrir la Terminal. Escribir npm init para crear package.json
// Instalación dependencia de desarrollo: npm install --save-dev cypress
// Datos: en package.json con el ejemplo de JESt, se cambiaba "tests"
// En el caso de Cypress se corre por npx, es decir, "scripts": {"test": "jest"}. Entonces npm start corre el "scripts"
// En este caso de Cypress se usa npx, la diferencia es que no esta 
// instalada toda la dependencia completa
//Existen dos comandos de Cypress open abre la aplicación de escritorio
// El otro es run, realiza las pruebas en el CLI
// Escribir en la terminal npx cypress open
// Abre la aplicación Cypress
// en VS Code - se crea una carpeta cypress
// Integration se encuentran los ejemplos
// Integration se colocaran mis pruebas
// Crear un archivo en Integration. nombreArchivo.spec.js

// Para ejecutar cypress npx cypress open
// Para crear los videos, en la terminal escribir npx cypress run

// para mejorar la calidad de video ir a cypress.json y agregar
// "videoCompression" : 0
// 0 es la mejor calidad hasta 51 (peor calidad)
// Volver a ejecutar npx cypress run
// Elimina los videos y crea unos nuevos

  // Creará una imagen hasta este momento
//   Ver en primerTest.spec.js
//   cy.screenshot();

import App from './classes/App.js';

const app = new App();