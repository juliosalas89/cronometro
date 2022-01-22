let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let centesimas = document.getElementById("centesimas");
let sHoras = document.getElementById("sHoras");
let sMinutos = document.getElementById("sMinutos");
let sSegundos = document.getElementById("sSegundos");
let sCentesimas = document.getElementById("sCentesimas");
let seg = 0;
let min = 0;
let hora = 0;
let cent = 0;
let i = true;
let tiempo = 0;

function contar() {
    cent++
    if (cent == 100) {
        cent = 0;
        seg++;
        if (seg == 60) {
            seg = 0;
            min++;
            if (min == 60) {
                min = 0;
                hora++;
                if (hora < 10) {
                    horas.innerText = "0" + hora;
                } else {
                    horas.innerText = hora;
                }
            }
            if (min < 10) {
                minutos.innerText = "0" + min;
            } else {
                minutos.innerText = min;
            }
        }
        if (seg < 10) {
            segundos.innerText = "0" + seg;
        } else {
            segundos.innerText = seg;
        }
    }
    if (cent < 10) {
        centesimas.innerText = "0" + cent;
    } else {
        centesimas.innerText = cent;
    }
}

function startStop() {
    let boton = document.getElementById("boton");
    if (i) {
        tiempo = window.setInterval(contar, 10);
        boton.innerText = "STOP";
        boton.className = "ancho_boton mx-2 btn btn-danger";
        i = false;
    } else {
        boton.innerText = "START";
        boton.className = "ancho_boton mx-2 btn btn-success";
        window.clearInterval(tiempo);
        i = true;
    }
}

function reset() {
    seg = 0;
    min = 0;
    hora = 0;
    cent = 0;
    horas.innerText = "00";
    minutos.innerText = "00";
    segundos.innerText = "00";
    centesimas.innerText = "00";
    if (boton.innerText == "STOP") {
        startStop();
    }
}

function resetAll() {
    seg = 0;
    min = 0;
    hora = 0;
    cent = 0;
    horas.innerText = "00";
    minutos.innerText = "00";
    segundos.innerText = "00";
    centesimas.innerText = "00";
    sHoras.innerText = "00";
    sMinutos.innerText = "00";
    sSegundos.innerText = "00";
    sCentesimas.innerText = "00";
    if (boton.innerText == "STOP") {
        startStop();
    }
}

function sample() {
    if (hora < 10) {
        sHoras.innerText = "0" + hora;
    } else {
        sHoras.innerText = hora;
    }
    if (min < 10) {
        sMinutos.innerText = "0" + min;
    } else {
        sMinutos.innerText = min;
    }
    if (seg < 10) {
        sSegundos.innerText = "0" + seg;
    } else {
        sSegundos.innerText = seg;
    }
    if (cent < 10) {
        sCentesimas.innerText = "0" + cent;
    } else {
        sCentesimas.innerText = cent;
    }
}

if (screen.width < 540) {
    document.getElementById("section").className = "my-5 text-light fuente_cronometro"
    document.getElementById("body").className = "fondo_sm"
} else {
    document.getElementById("section").className = "fondo_lg my-5 text-light fuente_cronometro"
    document.getElementById("body").className = ""
}