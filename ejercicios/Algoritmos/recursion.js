// Recursividad

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  console.log(n);
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Stack o pila de llamadas

function countdown(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(15);

// A tomar en cuenta

// 1. La recursividad es cuando una funcion se llama a si misma.
// 2. Toda funcion recursiva tiene dos casos: el caso base y el caso recursivo.

// Algoritmos de Ordenamiento

// Quick Sort
// Merge Sort
// Bubble Sort
// Insertion Sort
// Selection Sort
