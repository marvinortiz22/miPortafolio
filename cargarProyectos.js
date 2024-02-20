let proyectos = [
    {
        nombre: "RaidSim",
        srcfoto: "./images/proyectos/RaidSim.png",
        descripcion: "Simulador de distintos tipos de arreglos RAID que permite ver como se distribuyen los discos duros que los componen, así como los datos que en ellos se almacenan.",
        tecnologias: ["HTML","Boostrap","JS"],
        url:"https://marvinortiz22.github.io/RAIDSim/",
        repositorio:"https://github.com/marvinortiz22/RAIDSim"
    },
    {
        nombre: "Sistema gestor de notas",
        srcfoto: "./images/proyectos/sistema gestor de notas.webp",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus nihil ipsum obcaecati quisquam rerum ducimus maxime optio corrupti at laboriosam architecto minus, sint consequuntur voluptates repellat atque doloribus nesciunt!",
        tecnologias: ["HTML","Boostrap","Django","MySQL"],
        url:"",
        repositorio:""
    },
    {
        nombre: "Sistema de estados financieros",
        srcfoto: "./images/proyectos/sistema de estados financieros.jpg",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus nihil ipsum obcaecati quisquam rerum ducimus maxime optio corrupti at laboriosam architecto minus, sint consequuntur voluptates repellat atque doloribus nesciunt!",
        tecnologias: ["HTML","Boostrap","Django","MySQL"],
        url:"",
        repositorio:""
    },
    {
        nombre: "Sistema de gestion de proyectos viales",
        srcfoto: "./images/proyectos/sistema de gestion de proyectos viales.jpg",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus nihil ipsum obcaecati quisquam rerum ducimus maxime optio corrupti at laboriosam architecto minus, sint consequuntur voluptates repellat atque doloribus nesciunt!",
        tecnologias: ["HTML","Boostrap","Django","MySQL"],
        url:"",
        repositorio:""
    },
    {
        nombre: "Tekedafash",
        srcfoto: "./images/proyectos/tekedafash.jpg",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus nihil ipsum obcaecati quisquam rerum ducimus maxime optio corrupti at laboriosam architecto minus, sint consequuntur voluptates repellat atque doloribus nesciunt!",
        tecnologias: ["HTML","Boostrap","Django","MySQL"],
        url:"",
        repositorio:""
    },
    {
        nombre: "Sistema de reporte de accidente",
        srcfoto: "./images/proyectos/sistema de reportes de transito.jpg",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus nihil ipsum obcaecati quisquam rerum ducimus maxime optio corrupti at laboriosam architecto minus, sint consequuntur voluptates repellat atque doloribus nesciunt!",
        tecnologias: ["HTML","Boostrap","JS","Django","PostgreSQL"],
        url:"",
        repositorio:""
    },
]
function init() {
    cargarProyectos()
}  

function cargarProyectos(){
    let proyectoContainer=document.getElementById("proyectoscontainer")
    for(let i=0;i<proyectos.length;i++){
        /*i==2?proyectoContainer=document.getElementById("proyectosocultos"):false*/
        proyectoContainer.innerHTML+=`
        <div class="cardproyecto" id="cardproyecto">
        <a href="${proyectos[i].repositorio}" class="agithubproyectoicon" target="_blank"><img src="./images/contacto/github-dark.png" title="Ir al repositorio" class="githubproyectoicon"></a>
            <p class="nombreproyecto">${proyectos[i].nombre}</p>
            <img class="proyectoimage" id="proyectoimage" src="${proyectos[i].srcfoto}">
            <p id="descripcion" class="proyecto-descripcion">${proyectos[i].descripcion}</p>
            <p class="tecnologias">Tecnologías: </p>
            <div class="tecnologiasiconos">
            ${proyectos[i].tecnologias.map(tecnologia => `<img class="tecnologiaicono" title="${tecnologia}" src="./images/tecnologias/${tecnologia}.png"></img>`).join('')}
            </div>
            <a href="${proyectos[i].url}" target="_blank" class="abotonvisitar"><button class="botonvisitar">Visitar</button></a>
        </div>`

    }
}
document.addEventListener('DOMContentLoaded', init());