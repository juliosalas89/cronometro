let tiempo = window.setInterval(contar, 10);
let horas = document.getElementById("horas"); 
let minutos = document.getElementById("minutos"); 
let segundos = document.getElementById("segundos");
let centesimas = document.getElementById("centesimas"); 
let seg = 0;
let min = 0;
let hora = 0;
let cent = 0;

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
                horas.innerText = hora
            }
            minutos.innerText = min;
        } 
        segundos.innerText = seg;
    }
    centesimas.innerText = cent;
}