const menu = document.querySelector(`.menu`);
const nav = document.querySelector(`.nav`);
const imgMenu = document.querySelector(`.img-menu`)

menu.addEventListener(`click`, () =>{
    nav.classList.toggle(`spread`);
})

window.addEventListener(`click`, (e) =>{
    if(nav.classList.contains(`spread`) && e.target != menu && e.target != imgMenu && e.target != nav){
        nav.classList.toggle(`spread`);
    }
})


// Lighbox - Galeria

const imagenes = document.querySelectorAll(`.img-galeria`);
const imagenSelecionada = document.querySelector(`.imagen-nueva`);
const contenedor = document.querySelector(`.javascript-imagen`);

imagenes.forEach(imagnes =>{
    imagnes.addEventListener(`click`,()=>{
        seleccion(imagnes.getAttribute(`src`));
    });
});

const seleccion = (imagnes)=>{
    imagenSelecionada.src = imagnes;
    contenedor.classList.toggle(`translate-0`);
    imagenSelecionada.classList.toggle(`imagenAnimacion`);
};

contenedor.addEventListener(`click`, (e)=>{
    if(e.target != imagenSelecionada){
        contenedor.classList.toggle(`translate-0`);
        imagenSelecionada.classList.toggle(`imagenAnimacion`);
    }
})

