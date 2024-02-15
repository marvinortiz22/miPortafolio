let proyectos = [
    {
        nombre: "proyecto 1",
        srcfoto: "./static/proyectoimage.png",
        descripcion: "Simulador de distintos tipos de arreglos RAID que permite ver como se distribuyen los discos duros que los componen, así como los datos que en ellos se almacenan.",
        tecnologias: ["html","boostrap","js"]
    },
    {
        nombre: "proyecto 2",
        srcfoto: "./static/proyectoimage.png",
        descripcion: "Simulador de distintos tipos de arreglos RAID que permite ver como se distribuyen los discos duros que los componen, así como los datos que en ellos se almacenan.",
        tecnologias: ["html","css","js"]
    },
    {
        nombre: "proyecto 3",
        srcfoto: "./static/proyectoimage.png",
        descripcion: "Simulador de distintos tipos de arreglos RAID que permite ver como se distribuyen los discos duros que los componen, así como los datos que en ellos se almacenan.",
        tecnologias: ["html","css","js"]
    },
    {
        nombre: "proyecto 4",
        srcfoto: "./static/proyectoimage.png",
        descripcion: "Simulador de distintos tipos de arreglos RAID que permite ver como se distribuyen los discos duros que los componen, así como los datos que en ellos se almacenan.",
        tecnologias: ["html","css","js"]
    },
    {
        nombre: "proyecto 5",
        srcfoto: "./static/proyectoimage.png",
        descripcion: "Simulador de distintos tipos de arreglos RAID que permite ver como se distribuyen los discos duros que los componen, así como los datos que en ellos se almacenan.",
        tecnologias: ["html","css","js"]
    },
]
function init() {
    let proyectoContainer=document.getElementById("proyectoscontainer")
    for(let i=0;i<proyectos.length;i++){
        i==2?proyectoContainer=document.getElementById("proyectosocultos"):false
        proyectoContainer.innerHTML+=`
        <div class="cardproyecto" id="cardproyecto">
            <img src="./static/github.svg" class="githubproyectoicon">
            <p class="nombreproyecto">${proyectos[i].nombre}</p>
            <img class="proyectoimage" id="proyectoimage" src="${proyectos[i].srcfoto}">
            <p id="descripcion" class="proyecto-descripcion">${proyectos[i].descripcion}</p>
            <p class="tecnologias">Tecnologías: </p>
            <div class="tecnologiasiconos">
            ${proyectos[i].tecnologias.map(tecnologia => `<img class="tecnologiaicono" src="./static/tecnologias/${tecnologia}.png"></img>`).join('')}            </div>
        </div>`

    }
}  
document.addEventListener('DOMContentLoaded', init());