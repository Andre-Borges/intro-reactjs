// TEMPLATE LITERALS
const meuNome = "André";
const minhaIdade = 23;

console.log(`Meu nome é: ${meuNome} e tenho ${minhaIdade} anos.`);

// OPERAÇÕES EM ARRAY + ARROW FUNCTION
const arr = [1, 3, 4, 5, 8, 9];

// Pode passar o index como parametro
const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: "Diego" });

console.log(teste());

const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

// Retorna os elementos onde a condição é verdadeira
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

// Retorna o primeiro elemento onde a condição é verdadeira.
const find = arr.find(function(item) {
  return item === 3;
});

console.log(find);

// ---------------------------------------------------------------------------------------

// VALORES PADRÃO

const soma = (a = 3, b = 6) => a + b;

console.log("Soma: " + soma(1));
console.log("Soma: " + soma());

// ---------------------------------------------------------------------------------------

// DESESTRUTURAÇÃO

const usuario = {
  nome: "Diego",
  idade: "23",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};
const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
