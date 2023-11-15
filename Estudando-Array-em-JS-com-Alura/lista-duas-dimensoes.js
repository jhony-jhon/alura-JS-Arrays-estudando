const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
console.log(`O aluno(a) da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
A nota desse aluno(a) é: ${listaDeAlunosEMedias[1][1]}`);

/* Acima temos um exemplo de uma lista de duas dimensões, que é uma lista
composta de outras listas. */

/* No primeiro exemplo onde queremos o nome, colocamos primeiro [0], pois na 
const listaDeAlunosEMedias, a lista alunos é o índice 0.
Já no segundo exemplo, onde queremos a nota do aluno, primeiramente passamos [1],
porque agora queremos acessar medias e não mais alunos, e dentro de média queremos a posição 1
do elemento. */

