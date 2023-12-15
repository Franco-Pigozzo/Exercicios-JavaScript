function primeiraEUltimaMinusculas(frase) {
    
    frase = frase.trim();
    
    
    const primeiraLetra = frase[0].toLowerCase();
    const ultimaLetra = frase.slice(-1).toLowerCase();
    
   
    return [primeiraLetra, ultimaLetra];
}


const stringExemplo = "SOU BRAVO, SOU FORTE, SOU FILHO DO NORTE";
const resultado = primeiraEUltimaMinusculas(stringExemplo);
console.log(resultado);