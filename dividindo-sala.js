const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//const sala1 = alunos.slice(0, 10);
/* mesmo passando 10 no segundo parâmetro, o slice não pegará o indice 11 
    e sim de 0 até o 10 elemento. */

const sala1 = alunos.slice(0, alunos.length / 2); // funciona igual o comentado acima

//const sala2 = alunos.slice(10)
/* nesse segundo caso, não precisamos passar o segundo parâmetro
pois o JS já entende que queremos dividir do elemento índice 10 até o último do Array alunos */

const sala2 = alunos.slice(alunos.length / 2); // funciona igual o comentado acima

console.log(sala1);
console.log(sala2);