
let idade = 18;

// ---------- if/ else if / else ---------- //

if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 12) {
  console.log("Adolescente");
} else {
  console.log("Criança");
}

// ---------- Operador Ternário ---------- //

let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(resultado);

// ---------- Switch case ---------- //
let opcao = 1;

switch (opcao) {
  case 1:
    console.log("Maior de idade");
    break;
  case 2:
    console.log("Adolescente");
    break;
  default:
    console.log("Criança");
}

// ---------- Curiosidade: && e || como ifs curtos ---------- //

let logado = true;

// Executa se for true
logado && console.log("Usuário logado");

// Executa se for false
logado || console.log("Usuário não logado");