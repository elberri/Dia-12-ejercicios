function contarVocales(texto) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contador++;
    }
  }
  return contador;
}
let texto1 = prompt("Ingrese el primer texto:");
let texto2 = prompt("Ingrese el segundo texto:");
let texto3 = prompt("Ingrese el tercer texto:");

console.log("Texto 1 tiene " + contarVocales(texto1) + " vocales");
console.log("Texto 2 tiene " + contarVocales(texto2) + " vocales");
console.log("Texto 3 tiene " + contarVocales(texto3) + " vocales");
