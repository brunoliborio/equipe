// Obtém o elemento do modal
var modalAdd = document.getElementById("myModalAdd");
var modalDev = document.getElementById("myModalDev");
var modalEmp = document.getElementById("myModalEmp");
var modalLog = document.getElementById("myModalLog");
var modalCad = document.getElementById("myModalCad");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
    modalAdd.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modalAdd) {
        modalAdd.style.display = "none";

    }
    if (event.target == modalDev) {
        modalDev.style.display = "none";

    }
    if (event.target == modalEmp) {
        modalEmp.style.display = "none";

    }
    if (event.target == modalLog) {
        modalLog.style.display = "none";

    }
    if (event.target == modalCad) {
        modalCad.style.display = "none";

    }
}

// Abre o modal quando o usuário clica em um botão
function abrirModal() {
    if (modalAdd) {
        modalAdd.style.display = "block";
    }
}