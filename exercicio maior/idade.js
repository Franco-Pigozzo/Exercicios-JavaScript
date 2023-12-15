function calcularIdade(diaNascimento, mesNascimento, anoNascimento) {
    const hoje = new Date();
    const dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento);
  
    const diff = hoje - dataNascimento;
  
    const anos = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    const meses = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const dias = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  
    console.log(`Sua idade é ${anos} anos, ${meses} meses e ${dias} dias`);
  }
  
  calcularIdade(1, 6, 1990);