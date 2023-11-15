const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((alunos, indice) => {
    return medias[indice] < 7;
});

// poderíamos também ter o mesmo resultado sem passar o primeiro parâmetro de filter
// para isso usamos o _ (underline). O resultado será o mesmo.

console.log(reprovados);

