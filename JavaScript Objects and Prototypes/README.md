# JavaScript Objects and Prototypes
>Professor: Jim Cooper - @jimthecoop

- 'use strict';

É sempre uma boa ideia utilizar strict mode. Strict mode faz com que o JavaScript apresente erros onde, normalmente, ocorreria aspenas uma falha silenciosa. 
Strict mode também não permite o uso de partes obsoletas do JavaScript.

## Creating JavaScript Objects

### Simplest way to create a Object in JavaScript
> Objeto literal

```js
var cat = {name: 'Fluffly', color: 'White'};
```

Para chamar uma das propriedades pertencentes ao objeto, basta utilizar sua referência `cat` mais o operador `.` e o nome da propriedade. 

```js
var cat = {name: 'Fluffly', color: 'White'};

cat.name;
// 'Flyffly'
```
 
Uma das coisas mais legais sobre linguagens dinâmicas como JavaScript é que você pode mudar completamente as formas dos objetos depois de serem criados.

```js
var cat = {name: 'Fluffly', color: 'White'};

cat.age = 3; // Criamos uma nova propriedade para o objeto `cat`

cat.name;
// 'Flyffly'
```

### Adding functions to an object

```js
var cat = {name: 'Fluffly', color: 'White'};

cat.speak = function(){
    console.log("Meeeeeow");
} // Criamos uma função para nosso objeto

cat.speak(); // Chamamos a função criada.

cat.age = 3; // Criamos uma nova propriedade para o objeto `cat`

cat.name;
// 'Flyffly'
```

Ou pode podemos adicionar a função à estrutura do nosso objeto. 

```js
var cat = {
    name: 'Fluffly', 
    color: 'White',
    speak: function(){
        console.log("Meeeeeow");
    } // Criamos uma função dentro da estrutura do objeto.
};

cat.speak(); // Chamamos a função criada.

cat.age = 3; // Criamos uma nova propriedade para o objeto `cat`

cat.name;
// 'Flyffly'
```

## The new keyword

A palavra-chave `new` é seguido por uma função que você cria para inicializar o objeto.

```js
'use struict';

function Cat(){
    this.name = 'Fluffy';
    this.color = 'White';
}

var cat = new Cat();
```

### The this keyword

A palavra-chave `this` refere-se a um objeto. Esse objeto é qualquer objeto que está executando o trecho de código atual.

Por padrão, `this` é um objeto global. E no web browser, `this` é o 'window object'.


Quando nós executamos esta função `Cat`, ao que o `this` se refere? Ele está se referindo a um novo objeto vazio. Isso é o que a palavra-chave `new` faz. Ele cria um novo objeto JavaScript vazio, define o contexto do `this` para esse novo objeto e, em seguida, chama a função de `Cat`.

### Creating a constructor function

```js
'use struict';

function Cat(name, color){
    this.name = name;
    this.color = color;
} // Função construtora

var cat = new Cat('Fluffy', 'White');
```

## Using ECMAScript 6 Classes to create a Object

```js
'use strict';

class Cat(){
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    speak(){
        console.log("Meeeeeeow");
    }
}

var cat = new Cat('Fluffy', 'White');

cat.speak();
```

## Using bracket notation to acess properties

Em quais situações usamos bracket notation? Em situação onde você deseja acessar um propriedade onde seu identificado não tem um nome válido, como no cado do identificador 'Eye color'. Utilizando bracket notation, é possível acessar está propriedade. 

```js
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White'
}
cat['Eye color'] = 'Green';
console.log(cat['color']);
```

## JavaScript Prototype

- O que é um Prototype?

Um prototype é um objeto que existe em cada função dem JavaScript.

Se criarmos uma função, perceba que ela tem uma propriedade chamado prototype.

```js
var myFunction = function(){}
console.log(myFunction.prototype);
// {
//}
```

Perceba também que prototype é um objeto vazio.

Objetos, contudo, não possuem uma propriedade 'prototype'.

Se criamos um novo objeto e tentarmos ver sua propriedade prototype, será undefined.

```js
var cat = {name: 'Fluffy'};

console.log(cat.prototype);
// undefined
```

Contudo, um objeto possui uma propriedade '__proto__'.

```js
var cat = {name: 'Fluffy'};

console.log(cat.__proto__);
// Object {
//}
```

Então, de fato, um objeto tem uma propriedade prototype definida. Porém, o prototype de um objeto e o prototype de uma função são usados diferentemente.

### A function's prototype

O prototype de uma função é a instância de um objeto que se torna um prototype para todos os objetos criados usando essa função como um construtor.

### An object's prototype

O prototype de um objeto é a instância de um objeto do qual um objeto é herdado.

Um prototype não é como um Classe. Um prototype é na verdade um objeto (Tudo em JS é um objeto).

Exemplos:

```js
'use strict';

function Cat(){
    this.name = name;
    this.color = color;
}

var fluffy = new Cat('Fluffy', 'White');

console.log(Cat.prototype);
// Cat {
//}
console.log(fluffy.__proto__);
// Cat {
//}

console.log(Cat.prototype === fluffy.__proto__);
// true
```

Ambos os protótipos estão apontando para exatamente a mesma instância de um objeto.

Adicionar uma propridade para a função de um prototype afeta todos os objetos construídos usando esta função.

```js
'use strict';

function Cat(){
    this.name = name;
    this.color = color;
}

var fluffy = new Cat('Fluffy', 'White');

Cat.prototype.age = 3;

console.log(Cat.prototype);
// Cat {
//  age: 3    
//}
console.log(fluffy.__proto__);
// Cat {
//  age: 3    
//}

```


## Links citados

[Plunker](https://plnkr.co/) - Editor online


