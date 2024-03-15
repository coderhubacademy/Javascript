function calcularDescuento(precio) {
  if (precio > 2000) {
    return descuento(precio, 30);
  } else if (precio > 1000) {
    return descuento(precio, 15);
  } else if (precio > 500) {
    return descuento(precio, 10);
  } else {
    return precio;
  }
}

function descuento(precio, porcentaje) {
  return precio - precio * (porcentaje / 100);
}

console.log(calcularDescuento(4000));
console.log(calcularDescuento(550));
console.log(calcularDescuento(10));
