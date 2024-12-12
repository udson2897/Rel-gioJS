const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundos = document.getElementById('segundos');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');

const relogio = setInterval(function time() {
let hoje = new Date();
let h = hoje.getHours();
let m = hoje.getMinutes();
let s = hoje.getSeconds();
let d = hoje.getUTCDate();
let me = hoje.getUTCMonth() + 1; 

if (h < 10) h = '0' + h;
if (m < 10) m = '0' + m;
if (s < 10) s = '0' + s;

hora.textContent = h;
minuto.textContent = m;
segundos.textContent = s;
dia.textContent = d;
mes.textContent = me;


})
