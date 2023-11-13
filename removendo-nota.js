const notas = [10, 6, 8, 5.5, 10];

notas.pop(); // o pop remove o último elemento da lista

//console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; 
console.log(`A média das nota é ${media}`);