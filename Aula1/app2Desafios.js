// let nombreUsuario = prompt("Ingrese su nombre");
// let apellidoUsuario = prompt("ingrese su apellido");
// alert("el nombre del Usuario es: " + nombreUsuario);
// alert("el apellido del Usuario es : " + apellidoUsuario);
// alert("El nombre completo del usuario es: " + nombreUsuario + " " + apellidoUsuario);
/*
let apellidoUsuario = prompt("Ingrese su apellido");
while (apellidoUsuario === "" || apellidoUsuario === null) {
    apellidoUsuario = prompt("Por favor, ingrese su apellido (no puede estar vacío)");
}

alert("El apellido del usuario es: " + apellidoUsuario);

let nombreUsuario = prompt("Ingrese su nombre");
while (nombreUsuario === "" || nombreUsuario === null) {
    nombreUsuario = prompt("Por favor, ingrese su nombre (no puede estar vacío)");
}

let apellidoUsuario = prompt("Ingrese su apellido");
while (apellidoUsuario === "" || apellidoUsuario === null) {
    apellidoUsuario = prompt("Por favor, ingrese su apellido (no puede estar vacío)");
}
console.log(nombreUsuario);
console.log(apellidoUsuario);
alert("El nombre completo del usuario es: " + nombreUsuario + " " + apellidoUsuario);

let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert(mensajeDeBienvenida);
console.log(mensajeDeBienvenida);
*/
// ********************************************************************
// Desafíos

// 1) Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
/*
alert("¡Bienvenida y bienvenido a nuestro sitio web!"
    )
console.log("¡Bienvenida y bienvenido a nuestro sitio web!");

// 2) Declara una variable llamada nombre y asígnale el valor "Lua".
let nombre;
nombre = "Lua";
console.log(nombre);

// 3) Crea una variable llamada edad y asígnale el valor 25.
let edad;
edad = 25;
console.log(edad);

// 4) Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas;
numeroDeVentas = 50;
console.log(numeroDeVentas);

// 5) Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible;
saldoDisponible = 1000;
console.log(saldoDisponible);

// 6) Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("¡Error! Completa todos los campos");
console.log("¡Error! Completa todos los campos");

// 7) Declara una variable llamada mensajeDeError y 
// asígnale el valor "¡Error! Completa todos los campos". 
// Ahora muestra una alerta con el valor de la variable mensajeDeError .

let mensajeDeError;
mensajeDeError = "¡Error! Completa todos los campos  7";
console.log("¡Error! Completa todos los campos 7");


// 8) Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
let nombreUsuario;
nombreUsuario = prompt ("Ingrese su nombre");
alert(nombreUsuario);
console.log(nombreUsuario);

// 9) Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let edadActual;
edadActual = prompt( "Ingrese su edad");
alert(edadActual);
console.log("edad actual es :" + edadActual);

// 10) Ahora, si la edad es mayor o igual a 18,
//  muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
// Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección

if (edadActual >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}
console.log("Al tener "+ edadActual + " puedes obtener tu licencia de conducir");


// desafio numero dos
/*
Desafíos:

Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/
// # Resolución de los desafíos del curso de lógica de programación <h1>

// Practicar la lógica de programación, incluyendo conceptos como variables, condiciones (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos son la base para abordar problemas de manera estructurada, tomar decisiones sin código, crear bucles controlados e interactuar de manera efectiva con los usuarios.

// Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde temprano es fundamental para construir una base sólida y exitosa en el campo de la programación.

/*  ## Desafíos - Respuestas <h2>

 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".
```
 let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
```
2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
```
  let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}
```
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."
```
  let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}
```
4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.
```
  let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de ${saldoCuenta}.`);
```
5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.
```
  let nombre = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenido, ${nombre}!`);
*/

//******************************************* 
// DESAFIOS
/*
Desafío: Hora de practicar
 Siguiente pregunta

Hemos llegado a otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje. ¿Vamos a hacerlo? Desafíos:

1) Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
2) Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
3) Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while'
 en la consola del navegador.
4) Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
en la consola del navegador.
*/
/*
Resolución de los desafíos del curso de lógica de programación
Practicar la lógica de programación, que incluye conceptos como variables, condicionales (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos proporcionan la base para resolver problemas de manera estructurada, tomar decisiones en el código, crear iteraciones controladas e interactuar eficazmente con los usuarios.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde el principio es fundamental para construir una base sólida y exitosa en el campo de la programación.

Desafíos - Respuestas
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
}

Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
}

Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}

Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++
}"
*/
/* DESAFIOS ***************** 

Desafío: Hora de practicar
 Siguiente pregunta

Y vamos a poner en práctica nuestro conocimiento con otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje.

Desafíos finales:

1) Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

2) Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar
 el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

3) Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

4) Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.
 Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

5) Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
 Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
 Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

6) Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
 Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

/) Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si 
la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

8) Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero
 utilizando un if-else y muestra el mensaje correspondiente.

9) Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

10) Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

11) Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

12) Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

13) Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/
/*
### Resolución de los desafíos del curso de lógica de programación

**Practicar la lógica de programación**, que incluye conceptos como variables, condicionales (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos proporcionan la base para resolver problemas de manera estructurada, tomar decisiones en el código, crear iteraciones controladas e interactuar eficazmente con los usuarios.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar eficientemente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde el principio es fundamental para construir una base sólida y exitosa en el campo de la programación.

#### Calentamiento en programación - Respuestas

1. **Mensaje de bienvenida**

   ```
   console.log('¡Bienvenido!');
   ```

2. **Saludo personalizado**

   ```
   nombre = 'Gui Lima';
   console.log(`¡Hola, ${nombre}!`);
   ```

3. **Saludo personalizado con alerta**

   ```
   nombre = 'Gui Lima';
   alert(`¡Hola, ${nombre}!`);
   ```

4. **Pregunta y respuesta utilizando prompt**

   ```
   lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
   console.log(lenguajePreferido);
   ```

5. **Suma de dos valores**

   ```
   valor1 = 42;
   let valor2 = 8;
   let resultado = valor1 + valor2;
   console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
   ```

6. **Resta de dos valores**

   ```
   valor1 = 10;
   let valor2 = 8;
   let resultado = valor1 - valor2;
   console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);
   ```

7. **Determinar si es mayor o menor de edad**

   ```
   edad = prompt('Ingresa tu edad:');
   if (edad > 17) {
       console.log('Eres mayor de edad.');
   } else {
       console.log('Eres menor de edad.');
   }
   ```

8. **Verificar si un número es positivo, negativo o cero**

   ```
   numero = parseFloat(prompt("Ingresa un número:"));
   if (numero > 0) {
       console.log("El número es positivo.");
   } else if (numero < 0) {
       console.log("El número es negativo.");
   } else {
       console.log("El número es cero.");
   }
   ```

9. **Imprimir números del 1 al 10 con un bucle while**

   ```
   numero = 1;
   while (numero <= 10) {
       console.log(numero);
       numero++;
   }
   ```

10. **Determinar si una nota es aprobada o reprobada**

    ```
    nota = 8; // Reemplaza con el valor de la nota que deseas probar
    if (nota >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
    ```

11. **Número aleatorio con Math.random**

    ```
    numeroAleatorio = Math.random();
    console.log(numeroAleatorio);
    ```

12. **Número entero aleatorio entre 1 y 10 con Math.random**

    ```
    numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
    console.log(numeroIntAleatorio);
    ```

13. **Número entero aleatorio entre 1 y 1000 con Math.random**

    ```
    numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
    console.log(numeroIntAleatorio);
    ``*/

    /* FRASE IMPORTANTE 

    Aquí te dejo una frase para que celebremos esta victoria:
     "Si siempre intentas ser normal, nunca descubrirás lo extraordinario que puedes llegar a ser." (Maya Angelou)
     */