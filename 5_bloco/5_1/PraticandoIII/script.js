let cabecalho = document.getElementById('header-container');
    cabecalho.style.backgroundColor = 'green';

let urgent = document.getElementById('urgent');
    urgent.style.backgroundColor = 'orange';

let urgent2 = document.getElementById('urgent2');
    urgent2.style.backgroundColor = 'yellow';

let important = document.getElementsByClassName('important');
for (let i = 0; i < important.length; i += 1) {
    important[i].style.backgroundColor = 'purple';
    }

let important2 = document.getElementsByClassName('important2');
for (let i = 0; i < important2.length; i += 1) {
    important2[i].style.backgroundColor = 'black';
}
let baseboard = document.getElementById('footer-container');
    baseboard.style.backgroundColor = 'green';