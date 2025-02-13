/*
AND (&&)

El operador AND, representado por el símbolo "&&", se utiliza para combinar dos condiciones 
y evaluar si ambas son verdaderas. Si ambas condiciones son verdaderas, 
el resultado será... verdadero. De lo contrario, lógicamente será falso. Por ejemplo:
*/

let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

/*
OR( | | )

El operador OR, representado por los símbolos "||", se utiliza para verificar si al menos una de 
las condiciones es verdadera. Si una de las condiciones es verdadera, el resultado será verdadero. Si ambas son falsa
el resultado será falso. Aquí tienes un ejemplo: let tieneManzana = false; let tieneBanana = true;
*/
// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
  } else {
    console.log("No tienes frutas.");
  }

  