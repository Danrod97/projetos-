import EntradaDados from "readline-sync"
console.log("Aplicação de Juros:");

let valor= EntradaDados.question("Informe o Valor Da Divida: ");
let dias= EntradaDados.question("Informe os dias Passados desde o vencimento do boleto: ");
let juros= "";
let ValorJuros =(valor/100)*juros;
let totalDivida= valor+ValorJuros;
if (valor<=0) {console.log("O Valor da divida tem que ser maior que zero")};

if (dias<=0) {console.log("Voce esta em dia")} else (juros=10);

console.log("Valor Original da divida: "+valor);
console.log("Dias passados desde o vencimento: "+ dias);
console.log("Taxa de Juros: " + juros);
console.log("Valor total com juros: "+ totalDivida);


