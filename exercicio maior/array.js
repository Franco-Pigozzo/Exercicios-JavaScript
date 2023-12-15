function ordenarArray(array) {
    return array.slice().sort((a, b) => a - b);
  }
  
  const arrayDesordenado = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const arrayOrdenado = ordenarArray(arrayDesordenado);
  
  console.log("Array Desordenado:", arrayDesordenado);
  console.log("Array Ordenado:", arrayOrdenado);