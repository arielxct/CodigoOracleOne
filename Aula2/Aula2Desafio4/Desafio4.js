/*
Desafíos
1) Crea una lista vacía llamada "listaGenerica".
2)Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion
 con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

3)Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
 'Java', 'Ruby' y 'GoLang'.

4)Crea una función que muestre en la consola todos los elementos de la lista
 "lenguagesDeProgramacion.

5)Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.

6)Crea una función que calcule el promedio de los elementos en una lista de números.

7)Crea una función que muestre en la consola el número más grande y el número más
 pequeño en una lista.

8)Crea una función que devuelva la suma de todos los elementos en una lista.

9)Crea una función que devuelva la posición en la lista donde se encuentra un 
elemento pasado como parámetro, o -1 si no existe en la lista.

10)Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.

11) Crea una función que reciba una lista de números y devuelva una nueva
 lista con el cuadrado de cada número.
*/
/*
Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.

Sugestión de respuestas
*/

//1) Crea una lista vacía con el nombre listaGenerica.

let listaGenerica = [];

// 2)Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3) Agrega a la lista lenguagesDeProgramacion los siguientes elementos.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4) Crea una función que muestre en la consola todos los elementos de la 
// lista lenguagesDeProgramacion por separado.

function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();

// 5) Crea una función que muestre en la consola todos los elementos de la lista 
// lenguagesDeProgramacion de manera inversa.

function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();

//6)Crea una función que calcule la media de los elementos en una lista de números.

function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

// 7)Crea una función que muestre en la consola el número mayor y menor en una lista.

function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

// 8) Crea una función que retorne la suma de todos los elementos en una lista.

function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);

// 9) Crea una función que reciba una lista como parámetro y retorne el índice
//  de un elemento también pasado como parámetro. Si ese elemento no existe en
//  la lista, retorna -1.

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
// 10) Crea una función que reciba dos listas de números del mismo tamaño y
//  devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);  

// 11) Crea una función que reciba una lista de números y devuelva una nueva 
// lista con el cuadrado de cada número.

function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(resultado);  