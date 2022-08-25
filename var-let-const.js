// var (sem muitas regras, deixa o código imprevisível)

/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;

var area;

console.log(area)*/

// let (permite troca de valores)

/*let forma = 'retângulo';
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)*/

// const (tem o valor constante, nunca muda)

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area ;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)
