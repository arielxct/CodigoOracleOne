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
*/
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
