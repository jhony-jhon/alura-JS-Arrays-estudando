// aprendendo a remover elementos do meio de uma lista com splice()

const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//nomes.splice(1, 2);

/* O primeiro parâmetro recebe o índice a partir do qual o item será removido
e o segundo parâmetro a quantidade de elementos a serem removidos. */

//console.log(nomes);

// adicionando um novo aluno, o Rodrigo.

nomes.splice(1, 2, "Rodrigo");
console.log(nomes);

/* o splice aceita um terceiro parâmetro. Nele adicionamos 
   o Rodrigo no lugar dos elementos que foram removidos. */



