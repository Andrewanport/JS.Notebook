

// ---------- for ---------- //
for (let i = 0; i < 5; i++) {
    console.log("For:", i);
  }
  
// ---------- while ---------- //

let i = 0;

while (i < 5) {
  console.log("While:", i);
  i++;
}

// ---------- do while ---------- //

let x = 0;
do {
  console.log("Do While:", x);
  x++;
} while (x < 5);

// ---------- for...of ---------- //

let frutas = ["maçã", "banana", "uva"];
for (let fruta of frutas) {
  console.log("For of:", fruta);
}

// ---------- for...in ---------- //

let pessoa = { nome: "Ana", idade: 30 };
for (let chave in pessoa) {
  console.log("For in:", chave, "=", pessoa[chave]);
}
