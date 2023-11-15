const nomes = ["Evaldo", "Maris", "Camis"];

nomes.forEach(function (nome) {
    console.log(nome);
})

// Arrow functions

nomes.forEach(function => {
    console.log(nome);
});

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);