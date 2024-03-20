// Problema del hombre ardilla

diario = [
  {
    convirtioArdilla: true,
    dia: "Lunes",
    eventos: ["trabajo", "tocino", "cerveza"],
  },
  {
    convirtioArdilla: false,
    dia: "Martes",
    eventos: ["trabajo", "helado", "coliflor", "lasaña"],
  },
  {
    convirtioArdilla: false,
    dia: "Miercoles",
    eventos: ["descanso", "tostadas", "cerveza"],
  },
  {
    convirtioArdilla: true,
    dia: "Jueves",
    eventos: ["descanso", "cafe", "tocino"],
  },
  {
    convirtioArdilla: false,
    dia: "Viernes",
    eventos: ["descanso", "tostadas", "cerveza"],
  },
  {
    convirtioArdilla: false,
    dia: "Sabado",
    eventos: ["trabajo", "helado", "coliflor", "lasaña"],
  },
  {
    convirtioArdilla: false,
    dia: "Domingo",
    eventos: ["descanso", "tostadas", "cerveza"],
  },
];

// Encontrar los días en los que pedro se convirtió en ardilla
function encontrarDiasDeConversion(diario) {
  var diasDeConversion = [];
  for (var i = 0; i < diario.length; i++) {
    // Objeto dentro del arreglo - Cada dia de la semana
    var dia_de_semana = diario[i];
    // Si el dia de la semana convirtio a la ardilla
    if (dia_de_semana.convirtioArdilla) {
      console.log("Encontrado un día de conversión: " + dia_de_semana.dia);
      // Agrena el dia de la semana al arreglo diasDeConversion
      diasDeConversion.push(dia_de_semana);
    }
  }

  return diasDeConversion;
}

// Encontrar el patrón de eventos que ocurren en los días de conversión
function encontrarPatron(dias) {
  eventos = {};
  for (var i = 0; i < dias.length; i++) {
    var dia = dias[i];

    for (var j = 0; j < dia.eventos.length; j++) {
      var evento = dia.eventos[j];
      // Valida que el atributo existe dentro del objeto -> Al devolver un valor positivo ingresa al if
      if (eventos[evento]) {
        eventos[evento]++;
      } else {
        eventos[evento] = 1;
      }
    }
  }

  console.log(eventos);
  eventoMasRepetido(eventos);
}

// Encontrar el evento que más se repite, para encontrar la causa de la conversión
function eventoMasRepetido(eventos) {
  var max = 0;
  var eventoMasRepetido = "";
  for (var evento in eventos) {
    if (eventos[evento] > max) {
      max = eventos[evento];
      eventoMasRepetido = evento;
    }
  }
  console.log("La causa de tu problema puede ser: " + eventoMasRepetido);
}

var diasDeArdilla = encontrarDiasDeConversion(diario);
console.log(encontrarPatron(diasDeArdilla));
// console.log(diasDeArdilla.length);
