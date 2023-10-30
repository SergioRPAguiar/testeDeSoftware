const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let valores = [];
let valor;

let soma = 0;
let qtdPositivos = 0;
let qtdNegativos = 0;

function calcularEExibirResultados() {
  if (valores.length === 0) {
    console.log("Nenhum valor foi lido.");
    return;
  }

  for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
    if (valores[i] > 0) {
      qtdPositivos++;
    } else if (valores[i] < 0) {
      qtdNegativos++;
    }
  }

  const media = soma / valores.length;
  const percentualPositivos = (qtdPositivos / valores.length) * 100;
  const percentualNegativos = (qtdNegativos / valores.length) * 100;

  console.log("Média Aritmética: " + media);
  console.log("Quantidade de Valores Positivos: " + qtdPositivos);
  console.log("Quantidade de Valores Negativos: " + qtdNegativos);
  console.log("Percentual de Valores Positivos: " + percentualPositivos.toFixed(2) + "%");
  console.log("Percentual de Valores Negativos: " + percentualNegativos.toFixed(2) + "%");
}

function lerValor() {
  rl.question("Digite um valor (ou 'q' para calcular): ", function (entrada) {
    if (entrada.toLowerCase() === 'q') {
      rl.close();
      calcularEExibirResultados();
    } else {
      valor = parseFloat(entrada);
      if (!isNaN(valor)) {
        valores.push(valor);
        lerValor();
      } else {
        console.log("Valor inválido. Por favor, digite um número válido.");
        lerValor();
      }
    }
  });
}

lerValor();