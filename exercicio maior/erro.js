function claculationReason(dividendo, divisor) {
    if (divisor === 0) {
      throw new Error("Divisor não pode ser igual a zero");
    }
  
    return dividendo / divisor;
  }
  
  try {
    const result = claculationReason(10, 2);
    console.log("Resultado da divisão:", result);
  } catch (error) {
    console.error("Erro:", error.message);
  }
  