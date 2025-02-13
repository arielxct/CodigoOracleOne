/*
DESAFIOS
1) Cambia el contenido de la etiqueta h1 con document.querySelector y asigna
 el siguiente texto: "Hora del Desafío"

2) Crea una función que muestre en la consola el mensaje "El botón fue clicado" 
siempre que se presione el botón "Console".

3) Crea una función que se ejecute cuando se haga clic en el botón "prompt",
 preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta 
 con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad}
  y me acordé de ti".

4) Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre 
que se presione el botón "Alerta".

5) Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la
 suma en una alerta.

*/

// 1)
let tituloJuego = document.querySelector('h1');
tituloJuego.innerHTML = 'Hora del desafío';

// 2)
function clickDeUsuario(){
    alert('Click desde el boton Console en index');
    console.log('El botón fue clicado!');
    };

// 3
function nombreDeCiudad(){
    let nombreCiudad = prompt('Como se llama la cpaital de Brasil');
    
    alert('Estuve en  '+ nombreCiudad)+ ' y me acorde de ti';
    };

// 4 
function botonAlert(){
    alert('Yo amo JS');
};

// 5
function botonSuma(){
   let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
   
    let suma = numero1+numero2;
    alert ('La suma del numero '+ numero1 + ' mas el numero '+ numero2 + ' da como resultado '+ suma);
} 

/*
Resolución del desafío 1
Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.

Sugestión de respuestas

2.Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: Hora del Desafío.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';
3.Crea una función que muestre en la consola el mensaje El botón fue clicado siempre que se presione el botón Console.

En el index.html , agregamos en el onclick el siguiente código:

<button onclick="mostarMensajeEnLaConsola()" class="button">Console</button>
En el app.js

function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}
4.Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

En el index.html , agregamos en el onclick el siguiente código:

<button onclick="mostrarAlerta()" class="button">Alert</button>
En el app.js

function mostrarAlerta() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}
5.Crea una función que muestre una alerta con el mensaje: "Amo JS" siempre que se presione el botón "Alerta".

En el index.html , agregamos en el onclick el siguiente código:

<button onclick="mostarAlerta()" class="button">Alert</button>
En el app.js

function mostarAlerta(){
    alert("AMO JS");
} 
6.Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

En el index.html , agregamos en el onclick el siguiente código:

 <button onclick="sumaDosNumeros()" class="button">Suma</button>
En el app.js

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert('${primerNumero} + ${segunNumero} = ${resultado}')
}
    */