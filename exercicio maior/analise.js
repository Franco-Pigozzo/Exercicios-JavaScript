function analisarString(str) {
    const strinTratada = str.replaceAll(" ", "" ) .replaceAll("," , "") .replaceAll("!", "");
    const quantLetras = strinTratada.length;
    const stringInvertida = str.split("").reverse().join("");
    const quantidadeA = (str.match(/a/gi) || []).length;
  
    console.log(`Quantidade de letras: ${quantLetras}`);
    console.log(`String invertida: ${stringInvertida}`);
    console.log(`Quantidade de letras 'a': ${quantidadeA}`);
    
  }
  
  analisarString("Hello, World!");