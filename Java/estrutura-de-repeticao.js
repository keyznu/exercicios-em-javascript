// 

// ATIVIDADE - FOR
// Questão 1: Imprimir números de 1 a 20
// for (let i = 1; i <= 20; ++i){
//     console.log(i);
// }

// Questão 2: Imprimir números de 10 a 1 (decrescente)
// for (let i = 10; i >= 1; --i){
//     console.log(i);
// }

// Questão 3: Números impares de 1 a 15
// for (let i = 1; i <=15; i += 2){
//     console.log(i);
// }
//ou
// for (let i = 1; i <= 15; i++){
//     if (i % 2 == 1) console.log(i)
// }

// Questão 4: Tabuada do 7
// for (let i = 1; i <= 10; i++){
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// Questão 5: Calcular soma de números de 1 a 10 e exibir resultado
// let soma = 0
// for (let i = 1; i <= 10; i++){
//     soma += i;
// }
// console.log(soma)

// Questão 6: Loop de palavra (letras separadas)
// let palavra = "JavaScript";
// for (let i = 0; i < palavra.length; i++){
//     console.log(palavra[i])
// }

// Questão 7: Imprima os múltiplos de 5 entre 0 e 50.
// for (let i = 0; i <= 50; i += 5){
//     console.log(i)
// }

// Questão 8: soma de apenas os números pares de 1 a 20.
// let soma = 0
// for (let i = 2; i <= 20; i +=2){
//     soma +=i
// }
// console.log(soma)

// Questão 9: Quadrado de cada número de 1 a 10.
// for (let i = 1; i <= 10; i++){
//     console.log(i*i)
// }

// Questão 10: imprimir 10 *
// let resultado = "";
// for (let i = 1; i <= 10; i++){
//    resultado += "*";
// }console.log(resultado)

// ATIVIDADE WHILE
// Questão 11: Contador de 1 e para em 10 
// let contador = 0;
// while(contador < 11){
//     console.log(contador);
//     contador ++;
// }
// ou
// let contador = 0;
// while(contador >= 0){
//     if (contador === 10)
//         break;
//     ++contador;
//     console.log(contador)
// }


// Questão 12: Pedir enquanto o númerp fpr menpr que 100
// let num = 150;
// while (num < 100){
//     console.log("Digite um número maior.")
//     num = num + 10;
// }

// Questão 13: Conômetro
// let tempo = 11;
// while(tempo > 0){
//     --tempo;
//     if(tempo === 0){
//         console.log("Lançar!")
//         break;
//     }
//     console.log(tempo)
// }

// Questão 14: Calcular média de 5 números no loop
// let contador = 1;
// let soma = 0;
// while(contador <= 5){
//     let num = 10;
//     soma = soma + num;
//     contador++;
// }
// let media = soma/5;
// console.log("Média:", media);

// Questão 15: Use um loop para encontrar o primeiro múltiplo de 7 maior que 50
// let num = 51;
// while(num % 7 !== 0){
//     num++;
// }
// console.log("Primeiro múltiplo de 7 maior que 50:", num);

// Questão 16: Gere números aleatorios entre 1 e 10 até que o número sorteado seja 5.
// let num =  1;
// while(num !== 5){
//     console.log("Número atual:", num);
//     num++;
// }
// console.log("Saiu 5!");

// Questão 17: Somar os números ate a soma passar de 50
// let num = 1;
// let soma = 0;
// while(soma <= 50){
//     soma = soma + num;
//     num++;
// }
// console.log(soma)

// Questão 18: Imprimir de 2 em 2 até ser maior que 1000
// let num = 1;
// while(num < 1000){
//     console.log(num)
//     num *= 2
// }

// Questão 19: Simule o crescimento de uma plnata, ela começa com 1cm e cresce 2cm por dia ate atingit 15cm
// let num = 1;
// while(num <= 15){
//     console.log(num)
//     num += 2
// }

// Questão 20: Imprimir "Olá Mundo! uma única vez usando uma condição que já comece como falsa
let num = 1;
while(num > 0){
    if(num !== 2);
        console.log("Olá Mundo");
        break;
}