// ===================================
// MOSTRAR SECCIONES
// ===================================

function showSection(sectionId){

const sections=
document.querySelectorAll(
".content"
);


sections.forEach(section=>{

section.classList.remove(
"active"
);

});



document
.getElementById(sectionId)
.classList.add(
"active"
);



// botones activos

const buttons=
document.querySelectorAll(
"nav button"
);


buttons.forEach(btn=>{

btn.classList.remove(
"selected"

);

});


event.target.classList.add(
"selected"
);




// mover pantalla automáticamente

document
.getElementById(sectionId)

.scrollIntoView({

behavior:"smooth",

block:"start"

});

}



// ===================================
// INICIO
// ===================================

function showHome(){

const sections=
document.querySelectorAll(
".content"
);


sections.forEach(section=>{

section.classList.remove(
"active"

);

});



document
.getElementById(
"home"
)

.scrollIntoView({

behavior:"smooth"

});

}



// ===================================
// CARGA INICIAL
// ===================================

window.onload=()=>{

showHome();

}