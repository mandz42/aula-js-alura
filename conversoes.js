// tipo de dado e como a gente trabalha isso com booleanos

// conversão implícita - permite que a gente converta um tipo de dado em outro (um número em string, por exemplo)
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString) // == reconhece como sendo equivalente
console.log(numero === numeroString) // === reconhece como diferentes (um é número e outro é string)

console.log(numero + numeroString) // fez uma concatenação e não uma soma

// conversão explícita

//função Number() E função String()

console.log(numero + Number(numeroString)) // não concatenou, fez a soma, porque a função Number() transformou a string
