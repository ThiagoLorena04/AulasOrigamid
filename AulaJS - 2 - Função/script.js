function livro(nome, ano, autor) {
  nomeMaior = nome.toUpperCase();
  anoSubtracao = 2024 - ano;
  frase = nome + " por " + autor;
  const object = {
    nome: nomeMaior,
    ano: anoSubtracao,
    frase,
  };
  return object;
}

const objectReturn = livro("thiago", 2006, "eu mesmo");
console.log(objectReturn);
