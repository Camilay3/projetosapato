//declarações de variáveis
let i = window.document.getElementById('shoes');
let s7 = window.document.getElementById('size1');
let s8 = window.document.getElementById('size2');
let s9 = window.document.getElementById('size3');
let s0 = window.document.getElementById('size4');
let c1 = window.document.getElementById('color1');
let c2 = window.document.getElementById('color2');
let c3 = window.document.getElementById('color3');
let bola = window.document.getElementById('bola');
let body = window.document.getElementById('body');
var verde;
var rosa;
var verdeagua;
var nada = true;

//preloader
const overlay = document.querySelector('.overlay');
window.addEventListener('load', function(){
    overlay.style.display = 'none';
})

//funções

function animação(c){
    bola.style.display = "block";

    c.addEventListener("click", ()=> {
        bola.style.display = "";
        setTimeout(() => bola.style.display = "block", 1);
    });
}

function fundo(a, b, c){
    a.style.backgroundColor = 'transparent';
    a.style.color = 'black';
    b.style.backgroundColor = 'transparent';
    b.style.color = 'black';
    c.style.backgroundColor = 'transparent';
    c.style.color = 'black';
}

function ife(s){
    if (verde == true) {
        s.style.backgroundColor = 'var(--verde)';
    } else if (rosa == true){
        s.style.backgroundColor = 'var(--rosa)';
    } else if (verdeagua == true) {
        s.style.backgroundColor = 'var(--verdeagua)';
    } else if (nada == true) {
        s.style.color = 'black';
        Swal.fire('Escolha uma cor para ver os tamanhos')
    }
}

function mudarCorV(){
    i.src="imgs/verde.png";
    c1.style.transform = 'scale(0.80)';

    c2.style.transform = 'scale(1)';
    c3.style.transform = 'scale(1)';

    verde = true;
    rosa = false;
    verdeagua = false;
    nada = false;

    bola.style.backgroundColor = 'var(--verde)';
    animação(c1);
}

function mudarCorR(){
    i.src="imgs/rosa.png";
    c2.style.transform = 'scale(0.80)';

    c1.style.transform = 'scale(1)';
    c3.style.transform = 'scale(1)';

    verde = false;
    rosa = true;
    verdeagua = false;
    nada = false;

    bola.style.backgroundColor = 'var(--rosa)';
    animação(c2);
}

function mudarCorVA(){
    i.src="imgs/verdeagua.png";

    c3.style.transform = 'scale(0.80)';

    c1.style.transform = 'scale(1)';
    c2.style.transform = 'scale(1)';
    
    verde = false;
    rosa = false;
    verdeagua = true;
    nada = false;

    bola.style.backgroundColor = 'var(--verdeagua)';
    
    animação(c3);
}

function t37(){
    i.style.transform = 'scale(1)';
    s7.style.color = 'white';

    fundo(s8, s9, s0);
    ife(s7);
}

function t38(){
    i.style.transform = 'scale(1.05)';
    s8.style.color = 'white';

    fundo(s7, s9, s0);
    ife(s8);
}

function t39(){
    i.style.transform = 'scale(1.10)';
    s9.style.color = 'white';

    fundo(s7, s8, s0);
    ife(s9);
}

function t40(){
    i.style.transform = 'scale(1.15)';
    s0.style.color = 'white';

    fundo(s7, s8, s9);
    ife(s0);
}
