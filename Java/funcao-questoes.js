// Questão 1: 
// function saudarCliente(nome){
// return `Olá ${nome}, seja bem-vindo á nossa confeitaria!`;
// }
// alert(saudarCliente(pompt("Informe o seu nome: ")));

// Questão 2: Calculadora de Bolo - Crie uma função que receba o preço do quilo de um bolo e o peso solicitado.
// A função deve retornar o valor total a ser pago.
// function calcularValorBolo(precoQuilo, peso) {
//     return precoQuilo * peso;
// }
// let preco = parseFloat(prompt("Digite o preço do quilo do bolo:"));
// let peso = parseFloat(prompt("Digite o peso do bolo em quilos:"));
// let valorTotal = calcularValorBolo(preco, peso);
// alert("Valor total: R$" + valorTotal.toFixed(2)); //to.Fixed(2) serve para adicionar o ",00"

// Questão 3: Conversor de medida - Crie uma função que receba um valor em gramas e retorne o equivalente em quilos
// (ex: 1500 -> 1.5kg)
// function converterMedida(PesoGramas, PesoQuilos){
//     return PesoGramas / 1000;
// }
// let gramas = parseFloat(prompt("Digite o peso em gramas: "));
// let total = gramas / 1000;
// alert(`Peso em quilos = ${total}`);

// Questão 4: Verificador de estoque - Crie uma função que receba a quantidadeAtual e quantidadeMinima.
// Se a atual for menor que a mínima, retorne "Necessário repor estoque", caso contrario, "Estoque OK".
// function verificarEstoque(quantidadeAtual, quantidadeMinima){
//     if(quantidadeAtual < quantidadeMinima){
//         return "Necessário repor estoque";
//     } else{
//         return "Estoque OK";
//     }
// }
// let atual = parseFloat(prompt("Digite a quantidade atual em estoque: "));
// let minimo = parseFloat(prompt("Digite a quantidade mínima necessária: "));
// let resultado = verificarEstoque(atual, minimo);
// alert(resultado);

// Questão 5: Desconto de Fidelidade - Crie uma arrow function que receba um valor e retorne esse
// valor com 10% de desconto (tente fazer em apenas uma linha)
// let descontoFidelidade = valor => valor * 0.9;
// let preco = parseFloat(prompt("Digite o valor do produto:"));
// let precoComDesconto = descontoFidelidade(preco);
// alert("Preço com desconto: R$" + precoComDesconto.toFixed(2));

// Questão 6: Verificador de Paridade - Crie uma arrow funcion que receba um número
// e retorne true se ele for par e false se for ímpar.
// let verificarParidade = num => num % 2 === 0;
// let num = parseFloat(prompt("Digite um número para verificar paridade:"));
// let resultado = verificarParidade(num);
// if (resultado) {
//     alert("O número é par");
// } else {
//     alert("O número é ímpar");
// }

// Questão 7: Calculo de Área - Crie uma arrow function que receba a base e a altura de uma forma geometrica
// e retorne a área ($Base /times Altura$)
// let calcularArea = (base, altura) => base * altura;
// let base = parseFloat(prompt("Informe o valor da base: "));
// let altura = parseFloat(prompt("Informe o valor da altura: "));
// let resultado = calcularArea(base, altura);
// alert(`A área deste espaço é: ${resultado}`);

// Questão 8: Filtro de texto - Crie uma arrow function que receba uma string e
// retorne a mesma string em letras maiusculas (Use toUpperCase.)
// const FiltroTexto = (texto) => texto.toUpperCase();
// let mensagem = prompt("Informe uma palavra: ");
// alert(FiltroTexto(mensagem));