let contador = 1;

while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
}

//********************************

// Utilizando un bucle while con la instrucción break cuando el cliente adivine el número.

let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}

//****************************** 


// Usando un bucle for junto con la instrucción break cuando el cliente adivine el número o cuando el número de intentos llegue a 5.

let numeroSecreto = Math.floor(Math.random() * 10);
for (let intentos = 0; intentos < 5; intentos++) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}

//********************************** 
// Operador ternarios
let palabraPersona = "";

if(cantidadPersonas == 1){
    palabraPersona = "persona";
}else{
    palabraPersona = "personas"
}

// lo transformamos

let palabraPersona = cantidadPersonas === 1 ? "persona" : "personas";

/*
Explicación:

cantidadPersonas === 1 ?: Esta parte verifica si la cantidad de personas es exactamente 1. Si la condición es verdadera, se ejecuta la parte que sigue a los signos de interrogación.
"persona" :": Si la condición es verdadera, se asigna el valor "persona" a la variable palabraPersona.
"personas": Si la condición es falsa, se asigna el valor "personas" a la variable palabraPersona.
En resumen:

Esta línea de código hace exactamente lo mismo que las tres líneas anteriores, pero de una manera más compacta y legible.

Ventajas del operador ternario:

Concisión: Reduce la cantidad de código necesario para escribir condicionales simples.
Legibilidad: En muchos casos, el operador ternario puede hacer que el código sea más fácil de entender, especialmente cuando la condición y las asignaciones son cortas.
Consideraciones:

Complejidad: Para condiciones más complejas o múltiples asignaciones, puede ser más claro utilizar una estructura if...else tradicional.
Uso excesivo: Evitar el uso excesivo del operador ternario puede dificultar la lectura del código.
Ejemplo de uso en una oración:

JavaScript

console.log("Hay " + cantidadPersonas + " " + palabraPersona + " en la sala.");
Esto imprimiría en la consola:

"Hay 1 persona en la sala." si cantidadPersonas es 1.
"Hay 5 personas en la sala." si cantidadPersonas es 5.
En conclusión:

El operador ternario es una herramienta útil para escribir código JavaScript de forma más concisa y elegante. Al entender su funcionamiento, podrás utilizarlo para 

simplificar tus condicionales y mejorar la legibilidad de tu código.
*/