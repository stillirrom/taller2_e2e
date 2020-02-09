# Taller 2 E2E

## Integrantes:
- Daury Lecca (dn.lecca@uniandes.edu.co) 

- Juan Camilo Piza (jc.piza@uniandes.edu.co) 

## Contenido
Las pruebas E2E (end-to-end) permiten realizar pruebas desde la perspectiva del usuario. En este taller le daremos un vistazo a varios frameworks y librerías para correr este tipo de pruebas en aplicaciones WEB. ¡Este taller se entrega de a parejas! sin embargo ambos deben realizar la entrega por moodle. 

El taller consistirá en explorar cuatro frameworks de E2E testing distintos: 

- [Cypress](#cypress).
- [Protractor](#protractor).
- [Puppeteer + Jest](#puppeteer--jest).
- [Playwright](#playwright).

## Cypress
Cypress cuenta con varias ventajas. La configuración es bastante simple y tiene incluida una UI para ver las pruebas en vivo. Permite realizar video y snapshots y se integra muy bien al debugging del desarrollador 

Use Cypress para realizar las siguientes pruebas sobre la página de Los Estudiantes: 

- Cree una cuenta manualmente y pruebe automatizadamente el login correcto y la creación de una cuenta con los datos de login que uso previamente.

![Cypress pruebas login y registro](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_uno_cypress.jpg)
![Cypress pruebas login y registro](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_uno_cypress2.png)

- Pruebe la funcionalidad de búsqueda de profesores 

![Cypress pruebas busqueda profesor](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_dos_cypress.png)

![Cypress pruebas busqueda profesor](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_dos_cypress2.jpg)

- Pruebe como dirigirse a la página de un profesor 

![Cypress pruebas busqueda profesor](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_tres_cypress.jpg)

- Pruebe los filtros por materia en la página de un profesor

![Cypress pruebas filtros por materia](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/punto_cuatro_cypress.jpg)

## Protractor

https://www.youtube.com/watch?v=yW73JyMqyYg
Ejecución de pruebas usando Protractor

## Puppeteer + Jest
Se descargó el Proyecto del siguiente repositorio: 
[Angular 6 Registration Login Example](https://github.com/cornflourblue/angular-6-registration-login-example)

Luego se instalaron las siguientes librerías de Puppeteer y Jest, con los siguientes comandos: 

<pre><code>npm install puppeteer jest jest-puppeteer</code></pre>

<pre><code>npm install -g jest-cli</code></pre>

Instaladas las librerías, se crea el archivo **jest.config.js** 

<pre>
				
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
		
</pre>

Luego se crea el archivo **jest-puppeteer.config.js**

<pre>
				
module.exports = {
    launch: {
        headless: process.env.HEADLESS !== 'false',
        slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        devtools: true
    }
}
		
</pre>

Una vez se encuentren Puppeteer y Jest configurados se procede a crear la carpeta test en el interior de src. 

Dentro de la carpeta test crearemos nuestro script que contendrá los diferentes Test para la página de Registro. El archivo lo llamaremos: **register.test.js** 

Para esta oportunidad se crearon ocho diferentes casos de pruebas para el formulario de Registro.  

El comando que se utilizó para correr las pruebas fue: 

<pre><code>npm run test </code></pre>

A continuación, se muestran los resultados obtenidos para las pruebas de Registro. 

![Resultado Puppeteer](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/resultado_puppeteer-jest.jpg)

## Playwright

Entre las ventajas de Playwright se destaca una muy importante, que es que mientras Puppeteer solo puede interactuar con Chrome o Chromium, Playwright puede interactuar con distintos navegadores, como son Chromium, WebKit, Firefox e incluso Edge, el cual está basado en Chromium. 

Ya que algunos de los desarrolladores de Puppeteer en Google ahora hacen parte de Microsoft, son dos herramientas que tienen un espíritu similar, sin embargo, Playwright presenta la ventaja de ser una herramienta que pretende no estar afiliada a ningún fabricante y gracias a ello soporta diferentes navegadores. 

También cabe resaltar que la transición de Puppeteer a Playwright es sencilla ya que existe una similaridad en los conceptos y en las APIs. 

Una de las desventajas de Playwwright es que dada su “juventud” puede aún tener una alta cantidad de errores y características en desarrollo, por lo cual, puede no estar listo para todos los casos en los que se requiera realizar pruebas usándolo. De acuerdo a github sus primeros commits fueron hace apenas 4 meses.  
![Playwright](https://github.com/stillirrom/taller2_e2e/blob/master/imagenes/playwright.png)




| 		| Cypress 	|Protractor 	|Puppeteer 	|PlayWright 	|
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Interfaz gráfica  | Sí  | No  | No  | No |
| Generador de configuración   | Sí  | Sí (Con angular CLI)   | No  | No |
| Locators para AngularJS   | No  | Sí  | No  | No |
| Integración con Test frameworks   | No, interno (sintaxis jasmine)   | Jasmine, Mocha, Cucumber   | Principalmente todos   | Chai, Mocha, Jasmine, Jest, Cucumber  |
| Sistemas operativos | Mac, Linux, Windows   | Mac, Linux, Windows   | Mac, Linux, Windows   | Aquellos que usen (Chromium, WebKit o Firefox)  |
| Grabación de pruebas   | Sí  | No  | No  | Screenshots |
| Selenium backend   | No  | Sí  | No  | No |
| Time-traveling  | Sí  | No  | No  | No |
| Pruebas Cross-browser  | No  | No  | No  | Sí |
| Software libre  | Sí  | Sí  | Sí  | Sí |
| Navegadores soportados  | Canary, Chrome, Chromium, Edge, Electro y Firefox  | Chrome, Firefox, Internet Explorer y Safari | Chrome y Chromium  | Chromium, Edge, Firefox y WebKit |
| Último release (Repositorio)   | 2 días atrás (GiHub) - v4.0.1  | 9 días atrás (GiHub) - v5.4.3 | 4 días atrás (GitHub) - v2.1.1  | 9 días atrás (GiHub) - v0.10.0 |







