let proyectos = [
    {
        nombre: "Sistema de planillas y gestión de empleados",
        srcfoto: "./images/proyectos/sistema de planillas.webp",
        descripcion: "Software para administrar empleados, incluyendo vacaciones, horas trabajadas, permisos, descuentos y bonos. Automatiza procesos de nómina y mejora la gestión del personal.",
        tecnologias: ["JSP","Boostrap", "JS", "Spring Boot", "MySQL"],
        url: "",
        repositorio: ""
    },
    {
        nombre: "Sistema gestor de notas",
        srcfoto: "./images/proyectos/sistema gestor de notas.webp",
        descripcion: "Plataforma para la gestión de alumnos, materias y notas escolares. Facilita el seguimiento académico y la generación de reportes. Simplifica la administración educativa con una interfaz intuitiva.",
        tecnologias: ["HTML", "Boostrap", "JS", "Django", "MySQL"],
        url: "",
        repositorio: ""
    },
    {
        nombre: "Sistema de estados financieros",
        srcfoto: "./images/proyectos/sistema de estados financieros.jpg",
        descripcion: "Permite visualizar el balance general y el estado de resultados de una o varias empresas. Incluye cálculos de ratios financieros esenciales. Ayuda en el análisis y toma de decisiones financieras.",
        tecnologias: ["HTML", "Boostrap","JS", "Django", "MySQL"],
        url: "",
        repositorio: ""
    },
    {
        nombre: "Sistema de gestion de proyectos viales",
        srcfoto: "./images/proyectos/sistema de gestion de proyectos viales.jpg",
        descripcion: "Solución integral para gestionar proyectos de infraestructura vial. Controla costos, materiales y seguimiento de proyectos. Permite la gestión eficiente de clientes y recursos en proyectos viales.",
        tecnologias: ["HTML", "Boostrap","JS", "Django", "MySQL"],
        url: "",
        repositorio: ""
    },
    {
        nombre: "Tekedafash",
        srcfoto: "./images/proyectos/tekedafash.jpg",
        descripcion: "Plataforma online diseñada para la venta y gestión de productos de moda. Incluye catálogo de productos y carrito de compras. Mejora la experiencia de compra y administración del inventario.",
        tecnologias: ["HTML", "Boostrap", "JS","Django", "MySQL"],
        url: "",
        repositorio: ""
    },
    {
        nombre: "Sistema de reporte de accidentes viales",
        srcfoto: "./images/proyectos/sistema de reportes de transito.jpg",
        descripcion: "Aplicación para reportar accidentes de tráfico y ubicarlos en un mapa. Facilita la recopilación de datos y la respuesta rápida ante emergencias. Ayuda a las autoridades y ciudadanos a tener una visión clara de los incidentes viales.",
        tecnologias: ["HTML", "Boostrap", "JS", "Django", "PostgreSQL"],
        url: "",
        repositorio: ""
    },
    {
        nombre: "RaidSim",
        srcfoto: "./images/proyectos/RaidSim.png",
        descripcion: "Simulador que permite experimentar con distintos tipos de arreglos RAID. Muestra la distribución de discos duros y cómo se almacenan los datos en ellos. Ideal para entender la redundancia y el rendimiento de cada configuración.",
        tecnologias: ["HTML", "Boostrap", "JS"],
        url: "https://marvinortiz22.github.io/RAIDSim/",
        repositorio: "https://github.com/marvinortiz22/RAIDSim"
    },
]
let sobreMiHTML = document.getElementById("contenido")
let misProyectosHTML = document.getElementById("misproyectos")
let pestañaActual = "sobre mi"
function init() {
    cargarProyectos()
}

function cargarProyectos() {
    let proyectoContainer = document.getElementById("proyectoscontainer")
    for (let i = 0; i < proyectos.length; i++) {
        proyectoContainer.innerHTML += `
        <div class="cardproyecto" id="cardproyecto">
            <div class="encabezado-proyecto">
                <a href="${proyectos[i].repositorio}" class="agithubproyectoicon" target="_blank"><img src="./images/contacto/github-gray.png" title="Ir al repositorio" class="githubproyectoicon"></a>
                <p class="nombreproyecto">${proyectos[i].nombre}</p>
            </div>
            <img class="proyectoimage" id="proyectoimage" src="${proyectos[i].srcfoto}">
            <p id="descripcion" class="proyecto-descripcion">${proyectos[i].descripcion}</p>
            <div class="tecnologiasiconos">
            <p class="tecnologias">Tecnologías: </p>
            ${proyectos[i].tecnologias.map(tecnologia => `<img class="tecnologiaicono" title="${tecnologia}" src="./images/tecnologias/${tecnologia}.png"></img>`).join('')}
            </div>
            <a href="${proyectos[i].url}" target="_blank" class="abotonvisitar"><button class="botonvisitar">Visitar</button></a>
        </div>`

    }
}

function misProyectosTab() {
    if (pestañaActual != "mis proyectos") {
        sobreMiHTML.style.opacity = 0
        sobreMiHTML.style.display = "none"
        misProyectosHTML.style.display = "block"
        setTimeout(() => misProyectosHTML.style.opacity = 1, 1)
        pestañaActual = "mis proyectos"
    }
}

function sobreMiTab() {
    if (pestañaActual != "sobre mi") {
        misProyectosHTML.style.opacity = 0
        misProyectosHTML.style.display = "none"
        sobreMiHTML.style.display = "block"
        setTimeout(() => sobreMiHTML.style.opacity = 1, 1)
        pestañaActual = "sobre mi"
    }
}
document.addEventListener('DOMContentLoaded', init());