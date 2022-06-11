var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

// quando atribuímos um novo valor em uma variável, o valor anterior é sobrescrito

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

// uma constante não pode ter o seu valor sobrescrito 

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

//let pode ter seu valor sobrescrito, mas não tem um escopo global igual ao var

const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//podemos add uma chave e um valor em um objeto com *Dot Notation* poŕem não podemos alterar o valor completo de um objeto caso ele seja uma constante

//o mesmo serve para um array: 

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

//hoisting

age = 20;

var age;

console.log(age); // 20

// ao declarar uma variavel, e tentar alterar o valor dela, ocorre o hoisting devido a variavel fazer parte do escopo global. o mesmo não deve acontecer com let e const.

//Template literals

//Uma forma simplificada de concatenar nossas strings mais complexas.

const myName = 'Isabella';
console.log(`Welcome ${myName}!`); 
//isso seria o mesmo que ("Welcome, " + myName + "!")

// podemos colocar expressões dentro das chaves ${a + b}, devemos usar crases no inicio e final da frase que queremos passar... tambem podemos quebrar linhas na nossa frase.

// Com o template literals
console.log(`Primeira linha
Segunda linha
Terceira linha`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

//Arrow functions

//forma mais simplificada de escrever uma função

const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

// quando tivermos apenas o que sera retornado dentro do corpo da função podemos simplificar mais retirando o return e as chaves {}:

const printName = () => 'Lucas';
console.log(printName());

// podemos excluir os parenteses quando tivermos apenas um parametro:

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

//quando a função tiver mais de um parâmetro, devemos colocar eles dentro dos parênteses separados por vírgula:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

//Operadores ternários

//Podemos simplificar uma operação condicional que só tenha duas possibilidades e pode ser utilizado junto das arrow functions:

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

//caso a condição tenha mais de dois resultado é melhor usar os if/else ou switch/case

// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
);

// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};


const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha`
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!