# Taller 2 E2E
Las pruebas E2E (end-to-end) permiten realizar pruebas desde la perspectiva del usuario. En este taller le daremos un vistazo a varios frameworks y librerías para correr este tipo de pruebas en aplicaciones WEB. ¡Este taller se entrega de a parejas! sin embargo ambos deben realizar la entrega por moodle. 

El taller consistirá en explorar cuatro frameworks de E2E testing distintos: 

- [Cypress](#cypress).
- [Protractor](#protractor).
- [Puppeteer + Jest](#puppeteer+jest).
- [Playwright](#playwright).

## Cypress
Cypress cuenta con varias ventajas. La configuración es bastante simple y tiene incluida una UI para ver las pruebas en vivo. Permite realizar video y snapshots y se integra muy bien al debugging del desarrollador 

Use Cypress para realizar las siguientes pruebas sobre la página de Los Estudiantes: 

- Cree una cuenta manualmente y pruebe automatizadamente el login correcto y la creación de una cuenta con los datos de login que uso previamente.

![Cypress pruebas login y registro](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_uno_cypress.jpg)
![Cypress pruebas login y registro](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_uno_cypress2.png)

- Pruebe la funcionalidad de búsqueda de profesores 

![Cypress pruebas busqueda profesor](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_dos_cypress.png)

![Cypress pruebas busqueda profesor](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_dos_cypress2.png)

- Pruebe como dirigirse a la página de un profesor 

![Cypress pruebas busqueda profesor](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_tres_cypress.jpg)

- Pruebe los filtros por materia en la página de un profesor
![Cypress pruebas filtros por materia](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_cuatro_cypress.jpg)


## Puppeteer + Jest
Se descargó el Proyecto del siguiente repositorio: 
[Angular 6 Registration Login Example](https://github.com/cornflourblue/angular-6-registration-login-example)

Luego se instalaron las siguientes librerías de Puppeteer y Jest, con los siguientes comandos: 

<pre><code>`npm install puppeteer jest jest-puppeteer`</code></pre>

<pre><code>`npm install -g jest-cli`</code></pre>

Instaladas las librerías, se crea el archivo **jest.config.js** 

<pre>
		```
		
	module.exports = {
      preset: "jest-puppeteer",
      globals: {
        URL: "http://localhost:8081"
      },
      testMatch: [
        "**/test/**/*.test.js"
      ],
      verbose: true
  }
		
		```
</pre>

