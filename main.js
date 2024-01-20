const filtros = document.querySelectorAll(".challenges-filter ul li");
const btnInverterOrdem = document.querySelector(".btn-invert-order");
const listaDeDesafios = document.querySelector(".challenges ul");
const itensListaDeDesafios = document.querySelectorAll(".challenges ul li");

filtros.forEach((e) => {
    e.addEventListener("click", () => {
        for (let i = 0; i < filtros.length; i++) {
            filtros[i].classList.remove("selected");
        }
        e.classList.add("selected");
        trocarImagem(e);
        filtrar(e);
    })
})

// btnInverterOrdem.addEventListener("click", inverterOrdem);

// function inverterOrdem() {
//     if (listaDeDesafios.classList[0] == "ordem-invertida") {
//     } else {
//     }
// }

function trocarImagem(e) {
    const listaDeNos = e.childNodes;
    const textoListaDeNos = listaDeNos[1].innerText;
    const imagensFiltro = document.querySelectorAll(".challenges-filter ul li img");

    switch (textoListaDeNos) {
        case "Todos":
            imagensFiltro[0].src = "images/grid (1).png";
            imagensFiltro[1].src = "images/java-script.png";
            imagensFiltro[2].src = "images/block.png";
            imagensFiltro[3].src = "images/tools.png";
            imagensFiltro[4].src = "images/website.png";
            break;
        case "Com Javascript":
            imagensFiltro[0].src = "images/grid.png";
            imagensFiltro[1].src = "images/java-script (1).png";
            imagensFiltro[2].src = "images/block.png";
            imagensFiltro[3].src = "images/tools.png";
            imagensFiltro[4].src = "images/website.png";
            break;
        case "Sem Javascript":
            imagensFiltro[0].src = "images/grid.png";
            imagensFiltro[1].src = "images/java-script.png";
            imagensFiltro[2].src = "images/block (1).png";
            imagensFiltro[3].src = "images/tools.png";
            imagensFiltro[4].src = "images/website.png";
            break;
        case "Úteis":
            imagensFiltro[0].src = "images/grid.png";
            imagensFiltro[1].src = "images/java-script.png";
            imagensFiltro[2].src = "images/block.png";
            imagensFiltro[3].src = "images/tools (1).png";
            imagensFiltro[4].src = "images/website.png";
            break;
        case "Landing Pages":
            imagensFiltro[0].src = "images/grid.png";
            imagensFiltro[1].src = "images/java-script.png";
            imagensFiltro[2].src = "images/block.png";
            imagensFiltro[3].src = "images/tools.png";
            imagensFiltro[4].src = "images/website (1).png";
            break;
    }
}

function filtrar(e) {
    const listaDeNos = e.childNodes;
    const textoListaDeNos = listaDeNos[1].innerText;
    const tituloDesafios = document.querySelector(".challenges-title");

    switch (textoListaDeNos) {
        case "Todos":
            for (let i = 0; i < itensListaDeDesafios.length; i++) {
                itensListaDeDesafios[i].style.display = "flex";
            }
            tituloDesafios.innerText = "Todos";
            break;
        case "Com Javascript":
            const itensListaDeDesafiosComJavascript = document.querySelectorAll(".challenges ul li.with-javascript");

            for (let i = 0; i < itensListaDeDesafios.length; i++) {
                itensListaDeDesafios[i].style.display = "none";
            }

            for (let i = 0; i < itensListaDeDesafiosComJavascript.length; i++) {
                itensListaDeDesafiosComJavascript[i].style.display = "flex";
            }
            tituloDesafios.innerText = "Com Javascript";
            break;
        case "Sem Javascript":
            const itensListaDeDesafiosSemJavascript = document.querySelectorAll(".challenges ul li.without-javascript");

            for (let i = 0; i < itensListaDeDesafios.length; i++) {
                itensListaDeDesafios[i].style.display = "none";
            }

            for (let i = 0; i < itensListaDeDesafiosSemJavascript.length; i++) {
                itensListaDeDesafiosSemJavascript[i].style.display = "flex";
            }
            tituloDesafios.innerText = "Sem Javascript";
            break;
        case "Úteis":
            const itensListaDeDesafiosUteis = document.querySelectorAll(".challenges ul li.util");

            for (let i = 0; i < itensListaDeDesafios.length; i++) {
                itensListaDeDesafios[i].style.display = "none";
            }

            for (let i = 0; i < itensListaDeDesafiosUteis.length; i++) {
                itensListaDeDesafiosUteis[i].style.display = "flex";
            }
            tituloDesafios.innerText = "Úteis";
            break;
        case "Landing Pages":
            const itensListaDeDesafiosLandingPages = document.querySelectorAll(".challenges ul li.landing-pages");

            for (let i = 0; i < itensListaDeDesafios.length; i++) {
                itensListaDeDesafios[i].style.display = "none";
            }

            for (let i = 0; i < itensListaDeDesafiosLandingPages.length; i++) {
                itensListaDeDesafiosLandingPages[i].style.display = "flex";
            }
            tituloDesafios.innerText = "Landing Pages";
            break;
    }
}