var nombres = ["David", "Miguel", "Lino", "Joe", "Jose"];
console.log(nombres.length);

// length es un metodo para conocer la longitud de un arreglo
function printNames(names) {
  let index = 0;
  while (index < names.length) {
    console.log("Hola", names[index]);
    index++;
  }
}

printNames(nombres);
