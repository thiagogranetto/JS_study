const nome = "Thiago"; 
const sobrenome = "Granetto";
const idade = 24;
const peso = 70;
const altura = 1.74;
const anoAtual = 2025;
let imc;
let anoNacimento;

imc = peso / (altura * altura);
anoNacimento = anoAtual - idade;

console.log(nome, sobrenome, "tem", idade, "anos,", "pesa", peso, "kg,", "tem", altura, "de altura e seu IMC é de", imc , nome , sobrenome, "nasceu em", anoNacimento);