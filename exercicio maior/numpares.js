function filtrarNumerosPares(array) {
    return array.filter(numero => numero % 2 === 0);
  }
  
  const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arrayPares = filtrarNumerosPares(arrayOriginal);
  
  console.log("Array Original:", arrayOriginal);
  console.log("Números Pares:", arrayPares);
  