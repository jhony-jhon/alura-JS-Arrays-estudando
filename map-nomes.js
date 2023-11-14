const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => {
   return nome.toUpperCase();
});

//Assim tbm funciona como acima

//const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);