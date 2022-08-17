
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-50%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-25%"
    }, 500); 
}

btnRight.addEventListener("click", function() {
    moverDerecha();
})

function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-25%"
    }, 500); 
}

btnLeft.addEventListener("click", function() {
    moverIzquierda();
})


// boton modal
const botonAbrir2 = document.getElementById("ingresar2")
const botonAbrir = document.getElementById("ingresar");
const botonCerrar = document.getElementById("cerrar-modal");



function addClass() {
    let modal = document.getElementById("modal");
    let blur= document.getElementById("flexcontainer");
    let nosotros = document.getElementById("soluciones");
    let noticias = document.getElementById("galeria");
    let nav = document.getElementById("gridnav")
    noticias.classList.add('active')
    modal.classList.add('active');
    blur.classList.add('active');
    nosotros.classList.add('active');
    nav.classList.add('active')
}

function deleteClass() {
    let modal = document.getElementById("modal");
    let blur= document.getElementById("flexcontainer");
    let nosotros = document.getElementById("soluciones");
    let noticias = document.getElementById("galeria");
    let nav = document.getElementById("gridnav")
    noticias.classList.remove('active');
    modal.classList.remove('active');
    blur.classList.remove('active');
    nosotros.classList.remove('active');
    nav.classList.remove('active')
}


botonAbrir.addEventListener("click", addClass)
botonAbrir2.addEventListener("click", addClass)
botonCerrar.addEventListener("click", deleteClass)

const hamburguer = document.getElementById("hamburger");
const navUl = document.getElementById("navUl");

hamburguer.addEventListener("click", () => {
    navUl.classList.toggle('show')
})