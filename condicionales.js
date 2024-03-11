// Condicionales

// If -> SI - Else -> SINO

// if (condicion) { 'CODIGO A EJECUTAR' }
// else if (condicion) { 'CODIGO A EJECUTAR' }
// else { 'CODIGO A EJECUTAR' }

// Usamos else if cuando tenemos mas de dos opciones a evaluar.

// calculo de promedio simple
nota_a = 10;
nota_b = 5;
nota_c = 7;

nota_final = (nota_a + nota_b + nota_c) / 3;

if (nota_final >= 10) {
  console.log("Aprobado", nota_final);
} else {
  console.log("Reprobado", nota_final);
}

var edad = 25;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

var deporte = "rugby";

if (deporte == "beisbol") {
  console.log("Tu descuento es del 10%");
} else if (deporte == "futbol") {
  console.log("Tu descuento es del 20%");
} else if (deporte == "tenis") {
  console.log("Tu descuento es del 5%");
} else {
  console.log("No tienes descuento");
}
