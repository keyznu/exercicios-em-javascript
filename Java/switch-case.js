// Atividades
// 
// Questão 1: Dias da semana
// let dia = 2
// switch(dia){
//     case 1:{
//         console.log("domingo");
//     }break;
//     case 2:{
//         console.log("segunda");
//     }break;
//     case 3:{
//         console.log("terça");
//     }break;
//     case 4:{
//         console.log("quarta");
//     }break;
//     case 5:{
//         console.log("quinta");
//     }break;
//     case 6:{
//         console.log("sexta");
//     }break;
//     case 6:{
//         console.log("sábado");
//     }break;
//     default:{
//         console.log("não é um dia da semana")
//     }break;
// }

// Questão 2: Meses do ano e estações
// let mês = "abril"
// switch(mês){
//     case "janeiro":{
//         console.log("verão");
//     }break;
//     case "fevereiro":{
//         console.log("verão");
//     }break;
//     case "março":{
//         console.log("outono");
//     }break;
//     case "abril":{
//         console.log("outono");
//     }break;
//     case "maio":{
//         console.log("outono");
//     }break;
//     case "junho":{
//         console.log("inverno");
//     }break;
//     case "julho":{
//         console.log("inverno");
//     }break;
//     case "agosto":{
//         console.log("inverno");
//     }break;
//     case "setembro":{
//         console.log("primavera");
//     }break;
//     case "outubro":{
//         console.log("primavera");
//     }break;
//     case "novembro":{
//         console.log("primavera");
//     }break;
//     case "dezembro":{
//         console.log("verão");
//     }break;
//     default:{
//         console.log("não é um mês do ano.")
//     }break;
// }
// OBS: o case pode ser colocado um acima do outro para ficar performatico caso a resposta em console se repita em ambos.

// // Questão 3: Calculadora
// let calculo = "+"
// let num1 = 2
// let num2 = 10
// switch(calculo){
//     case "+":{
//         console.log(num1+num2);
//     }break;
//     case "-":{
//         console.log(num1-num2);
//     }break;
//     case "*":{
//         console.log(num1*num2);
//     }break;
//     case "/":{
//         console.log(num1/num2);
//     }break;
//     default:{
//         console.log("Não é uma operação.")
//     }break;
// }

// Questão 4: Sistema de Notas
// let nota = "A"
// switch(nota){
//     case "A":{
//         console.log("Excelente");
//     }break;
//     case "B":{
//         console.log("Bom");
//     }break;
//     case "C":{
//         console.log("Regular");
//     }break;
//     case "D":{
//         console.log("Ruim");
//     }break;
//     case "F":{
//         console.log("Reprovado");
//     }break;
//     default:{
//         console.log("Nota não identificada pelo sistema.")
//     }break;
// }

// Questão 5: Menu de lanchonete
// let menu = 3
// switch(menu){
//     case 1:{
//         console.log("X-Burguer: R$35,00");
//     }break;
//     case 2:{
//         console.log("X-Salada: R$25,00");
//     }break;
//     case 3:{
//         console.log("Batata-Frita: R$12,00");
//     }break;
//     case 4:{
//         console.log("Refrigerante: R$10,00");
//     }break;
//     default:{
//         console.log("Não é um ítem que se encontra no menu.")
//     }break;
// }

// Questão 6: Verificador de Vogal
// let letra = "D"
// switch(letra){
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":{
//         console.log("É uma vogal");
//     }break;
//     default:{
//          console.log("Consoante ou outro caractere.")
//    }break;
// }

// Questão 7: Plano de Assinatura
// let planos = "Ouro"
// switch(planos){
//     case "Bronze":{
//         console.log("🟤 Plano Bronze: acesso básico aos recursos principais e suporte via e-mail.")
//     }break;
//     case "Prata":{
//         console.log("⚪ Plano Prata: acesso a recursos avançados e suporte em horário comercial.")
//     }break;
//     case "Ouro":{
//         console.log("🌟 Plano Ouro: acesso ilimitado a todos os recursos premium e suporte prioritário 24h.")
//     }break;
//     default:{
//         console.log("Plano não encontrado.")
//     }break;
// }

// Questão 8: Conversor de Moedas
// let reais = 200;
// let moeda = "USD";
// switch(moeda){
//     case "USD":{
//         console.log(reais/5.25);
//     }break;
//     case "EUR":{
//         console.log(reais/5.50);
//     }break;
//     case "GBP":{
//         console.log(reais/6.20);
//     }break;
//     default:{
//         console.log("Moeda inválida!")
//     }break;
// }

// Questão 9: Classificação de Idade
// let classificacao = "Adolescente"
// switch(classificacao){
//     case "Criança":{
//         console.log("Do 0 aos 14 anos" );
//     }break;
//     case "Adolescente":{
//         console.log("Dos 14 aos 18 anos");
//     }break;
//     case "Adulto":{
//         console.log("Dos 18 aos 60 anos");
//     }break;
//     case "Idoso":{
//         console.log("Dos 60 em diante anos");
//     }break;
//     default:{
//         console.log("Não é uma faixa etária especifica")
//     }break;
// }

// Questão 10: Tipos de Veiculos
// let veiculo = "Carro"
// let pedagio = 10.00
// switch(veiculo){
//     case "Carro":{
//         console.log("O pedágio para carros é de:",pedagio*2,"reais");
//     }break;
//     case "Moto":{
//         console.log("O pedágio para motos é de:",pedagio,"reais");
//     }break;
//     case "Caminhão":{
//         console.log("O pedágio para caminhões é de:",pedagio*3,"reais");
//     }break;
//     default:{
//         console.log("Não é um veículo.")
//     }break;
// }

// Questão 11: Dia Útil ou Fim de Semana
// let dia = 5
// switch(dia){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:{
//         console.log("Dia Útil");
//     }break;
//     case 1:
//     case 7:{
//         console.log("Fim de Semana");
//     }break;
//     default:{
//         console.log("Não é um dia da semana")
//     }break;
// }

// Questão 12: Status de Pedido
// let statusdopedido = 2
// switch(statusdopedido){
//     case 1:{
//         console.log("Aguardando");
//     }break;
//     case 2:{
//         console.log("Enviado");
//     }break;
//     case 3:{
//         console.log("Entregue");
//     }break;
//     default:{
//         console.log("Status Inválido")
//     }break;
// }

// Questão 13: Direção de Bússola
// let ponto = "N"
// switch(ponto){
//     case "N":{
//         console.log("Norte");
//     }break;
//     case "S":{
//         console.log("Sul");
//     }break;
//     case "L":{
//         console.log("Leste");
//     }break;
//     case "O":{
//         console.log("Oeste");
//     }break;
//     default:{
//         console.log("Não é um ponto cardeal");
//     }break;
// }

// Questão 14: Nível de Acesso
// let cargo = "Admin"
// switch(cargo){
//     case "Admin":{
//         console.log("O Admin possui acesso total ao sistema, podendo gerenciar usuários, configurar permissões, alterar parâmetros gerais e supervisionar todas as operações sem restrições.");
//     }break;
//     case "Editor":{
//         console.log("O Editor tem autonomia para criar, editar e excluir conteúdos, sendo responsável pela manutenção das informações publicadas. No entanto, não pode alterar configurações administrativas nem gerenciar usuários.");
//     }break;
//     case "Visitante":{
//         console.log("O Visitante tem acesso apenas para visualizar conteúdos disponíveis, sem possibilidade de modificar, excluir ou adicionar informações ao sistema.");
//     }break;
//     default:{
//         console.log("Nível de acesso inválido.");
//     }break;
// }

// Questão 15: Animal e Som
// let animal = "Vaca"
// switch(animal){
//     case "Cão":{
//         console.log("Au Au");
//     }break;
//     case "Gato":{
//         console.log("Miau");
//     }break;
//     case "Vaca":{
//         console.log("Muu");
//     }break;
//     case "Ovelha":{
//         console.log("Behh");
//     }break;
// }