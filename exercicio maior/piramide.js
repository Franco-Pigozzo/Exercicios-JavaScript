function imprimirPiramide(n) {
    for (let i = 1; i <= n; i++) {
        let linha = '';
        for (let j = 1; j <= i; j++) {
            linha += 'i';
        }
        console.log(linha);
    }
}


imprimirPiramide(5);
