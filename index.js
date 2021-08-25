//Mostrar idade da pessoa
var nome = "Fabio"


var hoje = new Date();
var aniversario = new Date('1979-08-22');


var ano = hoje.getFullYear() - aniversario.getFullYear();
var mes = hoje.getMonth() - aniversario.getMonth();
if (mes < 0) {
    ano = ano - 1;
}
var dia = hoje.getDay() - aniversario.getDay();
if (dia > 0) {
    ano = ano - 1;
}

console.log('Nome: ', nome);
console.log("\nIdade: ", ano, "anos");