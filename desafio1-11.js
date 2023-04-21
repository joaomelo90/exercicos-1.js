//faça um programa onde toda vez que ele rodas faça um nome aleatorio entre 1 e 100
let nomeAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(nomeAleatorio);


//Neste código, a função Math.random() é multiplicada por 100 para gerar um número entre 0 e 99. 
//Em seguida, é adicionado 1 ao resultado para que o número gerado esteja dentro do intervalo de 1 a 100.
// Por fim, a função Math.floor() é utilizada para arredondar o resultado para o número inteiro mais próximo. 
//O valor gerado é armazenado na variável nomeAleatorio e exibido no console com a função console.log().