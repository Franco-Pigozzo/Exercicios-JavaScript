function analisarString(str) {
    const quantidadeLetras = str.length;
    const stringInvertida = str.split("").reverse().join("");
    const quantidadeA = (str.match(/a/gi) || []).length;
  
    console.log(`Quantidade de letras: ${quantidadeLetras}`);
    console.log(`String invertida: ${stringInvertida}`);
    console.log(`Quantidade de letras 'a': ${quantidadeA}`);
  }
  
  analisarString("Hello, World!");