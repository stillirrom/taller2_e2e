describe('Los estudiantes - Filtros por materia en la página de un profesor', function() {
    it('Constr. Aplicaciones Móvil', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get('div.jsx-1802368871 > .labelHover').find('input[name="id:ISIS3510"]').click()
        cy.get('label.jsx-571610088.labelHover').contains('Constr. Aplicaciones Móvil')
    })
})

describe('Los estudiantes - Filtros por materia en la página de un profesor', function() {
    it('Estructuras de datos', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get('div.jsx-1802368871 > .labelHover').find('input[name="id:ISIS1206"]').click()
        cy.get('label.jsx-571610088.labelHover').contains('Estructuras De Datos')
    
    })
})

describe('Los estudiantes - Filtros por materia en la página de un profesor', function() {
    it('Lab. Estructuras Datos', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get('div.jsx-1802368871 > .labelHover').find('input[name="id:ISIS1206L"]').click()
    })
})

describe('Los estudiantes - Filtros por materia en la página de un profesor', function() {
    it('Progr con Tecnologías Web', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get('div.jsx-1802368871 > .labelHover').find('input[name="id:ISIS3710"]').click()
        cy.get('label.jsx-571610088.labelHover').contains('Progr Con Tecnologias Web')
    })
})

describe('Los estudiantes - Filtros por materia en la página de un profesor', function() {
    it('Pruebas Automáticas', function() {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get('div.jsx-1802368871 > .labelHover').find('input[name="id:MISO4208"]').click()
        cy.get('label.jsx-571610088.labelHover').contains('Pruebas Automáticas')
    })
})
