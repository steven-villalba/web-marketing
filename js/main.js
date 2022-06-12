let ubicacioPrincipal = window.scrollY;

    AOS.init();

window.addEventListener("scroll", function (){
    let desplazamientoActual = window.scrollY;
    if (ubicacioPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }
    else {
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacioPrincipal = desplazamientoActual;
})

// Menu Hamburguesa

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function (){
    enlacesHeader.classList.toggle("menudos");
})