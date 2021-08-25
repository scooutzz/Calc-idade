//Mostrar idade da pessoa
var nome = "Fabio"


var hoje = new Date();
var aniversario = new Date('2004-08-07');


var ano = hoje.getFullYear() - aniversario.getFullYear();
var mes = hoje.getMonth() - aniversario.getMonth();
if (mes < 0) {
    ano = ano - 1;
}
var dia = hoje.getDate() - aniversario.getDate();
if (dia < 0 && mes == 0) {
    ano = ano - 1;
}

console.log('Nome: ', nome);
console.log("\nIdade: ", ano, "ano(s)");

let frutas = ['uva', 'banana', 'maça', 'laranja', 'pêra']
for (let indice = 0; indice < frutas.length; indice++) {
    const frutasCorrente = frutas[indice];

    if (frutasCorrente == 'uva') {
        console.log("A " + frutasCorrente + " é roxa.");
    }
    if (frutasCorrente == 'banana') {
        console.log("A " + frutasCorrente + " é amarela.");
    }
    if (frutasCorrente == 'maça') {
        console.log("A " + frutasCorrente + " é vermelha.");
    }
    if (frutasCorrente == 'laranja') {
        console.log("A " + frutasCorrente + " é laranja.");
    }
    if (frutasCorrente == 'pêra') {
        console.log("A " + frutasCorrente + " é amarela.");
    }
}